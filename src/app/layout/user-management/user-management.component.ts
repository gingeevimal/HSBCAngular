import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonService } from '../../services/common.service';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators, FormControl } from "@angular/forms";
import { formValidators } from "../../helper/formValidators";
import { NgForm } from '@angular/forms';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { UserManagementService } from '../../services/user-management.service';
declare var $: any
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
import { analyzeFile } from '@angular/compiler';
import { environment } from 'src/environments/environment';

const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.csv';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  providers: [CommonService, MessageService, ToastModule],
  styleUrls: ['./user-management.component.css']
})

export class UserManagementComponent implements OnInit {
  selectedValue: any;
  cols: any[];
  exportPdfcolumn: any;
  clients: any = [];
  status: any = [];
  orderType: any = [];

  userManagement: any;
  userManagementForm: FormGroup;
  BulkUploadDetailsForm: FormGroup;
  showCount: boolean;
  update: boolean = false;
  showSideBar = true;
  isSubmitted = false;
  disabled: boolean;
  currentUserId: number;
  userLoginId: number;
  deleteUserName: string;
  uploadData: any;
  public fileName = 'Choose File';
  public headers: any;
  PasswordErrorMessage: string;

  constructor(
    private http: HttpClient, private formBuilder: FormBuilder,
    private UserManagement: UserManagementService,
    private messageService: MessageService,
  ) { }

  public exportAsExcelFile(json: any, excelFileName: string): void {
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet([], {header:json});
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Transactions');
    const excelBuffer: any = XLSX.write(wb, { bookType: 'csv', type: 'array' });
    this.saveAsExcelFile(excelBuffer, excelFileName);
  }

  private saveAsExcelFile(buffer: any, fileName: string): void {
    const data: Blob = new Blob([buffer], {
      type: EXCEL_TYPE
    });
    FileSaver.saveAs(data, 'Workflow_Input' + EXCEL_EXTENSION);
  }

  downloadCsv() {
    this.status = ['approved', 'rejected', 'pending'];
    const data = ['FirstName', 'LastName', 'Email', 'Phone', 'WorkPhone'];
    this.exportAsExcelFile(data, 'Workflow_Input');
  }


  ngOnInit() {
debugger
    $('.spinner').show();
    $('.modal').appendTo('#fullscreen');
    // this.shrService.getSideBarDetail().subscribe(resp => { this.showSideBar = resp });
    this.selectedValue = 'true';
    this.GetUserManagementList();
    this.userManagementForm = this.formBuilder.group({
      // OrganizationName: ["", [Validators.required,  Validators.maxLength(50)]],
      // FirstName: ["", [Validators.required, formValidators.alphabetical, formValidators.noWhitespace, Validators.maxLength(50)]],
      // LastName: ["", [Validators.required, formValidators.alphabetical, formValidators.noWhitespace, Validators.maxLength(50)]],
      // Email: ["", [Validators.required, formValidators.email, Validators.maxLength(50)]],
      // Password: ["", [Validators.required, Validators.minLength(8), Validators.maxLength(12)]],
      // Phone: ["", [Validators.required, formValidators.noWhitespace, formValidators.numeric,
      // Validators.minLength(7), Validators.maxLength(15)]],
      // WorkPhone: ["", [Validators.required, formValidators.noWhitespace, formValidators.numeric,
      // Validators.minLength(7), Validators.maxLength(15)]],
      active: "",
      Security:"",
      BusinessPartner:"",
      Department:"",
      Status:"",
      SecurityName:"",
      OrderType:"",
      ISIN:"",
      AvaloqID:"",
      Requester:"",
      AssignTo:"",
      rememberMeFlag: [false]
    });
    this.BulkUploadDetailsForm = this.formBuilder.group({
      InputFile: ['', [Validators.required]]
    });

    this.cols = [
      { field: 'businesspartner', header: 'business partner' },
      { field: 'department', header: 'department' },
      { field: 'ordertype', header: 'ordertype' },
      { field: 'security', header: 'security' },
      { field: 'securityname', header: 'securityname' },
      { field: 'isin', header: 'isin' },
      { field: 'avaloqid', header: 'avaloqid' },
      { field: 'requester', header: 'requester' },
      { field: 'assignto', header: 'assignto' },
      
    ];
    
    this.Department();
this.Status()
this.OrderType();
  }

  public get getFields() {
    return this.userManagementForm.controls;
  }

  equalArray(a, b) {
    if (a.length === b.length) {
      for (var i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
          return false;
        }
      }
      return true;
    } else {
      return false;
    }
  }

  handleFileInput(files: FileList) {

    try {
       this.fileName = files.item(0).name;
       var array = this.fileName.split(/\.(?=[^\.]+$)/);
       var extension = ['csv'];
       var n = extension.includes(array[1]);
       if (!n) {
         this.Errormessage("Invalid file upload");
         this.fileName = 'Choose File';
         return false;
       }
       else {
         this.BulkUploadDetailsForm.patchValue({ InputFile: { file: files.item(0) } });
       }
 
       import('xlsx').then(xlsx => {
         let workBook = null;
         let userdata = null;
         const reader = new FileReader();
   
      
        reader.onload = (event) => {
          const data = reader.result;
          workBook = xlsx.read(data, { type: 'binary' });
          let sheetcount = 1;
          userdata = workBook.SheetNames.reduce((initial, name) => {
            const sheet = workBook.Sheets[name];
            if (sheet && sheetcount == 1) {
              sheetcount = sheetcount += 1;
              const data1 = (xlsx.utils.sheet_to_json(sheet, { header: 1 }));
              this.headers = data1.shift();
             }
            initial[name] = xlsx.utils.sheet_to_json(sheet, { raw: false });
 
            return initial;
           }, {});
 
           const usermgntHeader = ["FirstName", "LastName", "Email", "Phone", "WorkPhone"];
 
          let checkEqual = this.equalArray(usermgntHeader,this.headers)
           if (!checkEqual) {
             this.Errormessage("Header mismacth");
             this.fileName = 'Choose File';
             return false;
           }
         },
 
      
         reader.readAsBinaryString(files.item(0));
   
       });
     }
    catch (e) {
      console.log('Try again. Something went wrong check the uploaded sheet.')
     }
   
   }
  // GetUserManagementList() {
  //   debugger
  //   $('.spinner').show();
  //   this.UserManagement.getRequest1('api/v1/CAdocument/GetCAdocument?businesspartner=test').subscribe((UserManagementDetails) => {
  //     console.log(any);
  //     debugger
  //     window.location.href = any;


  //     this.userManagement = any;
  //     this.showCount = true;
  //     $('.spinner').hide();
  //   },err=>{
  //     this.Errormessage(err);
  //   });
  // }


  GetUserManagementList() {
    debugger
    //this.UserManagement.getRequest1('api/v1/CAdocument/Login').subscribe((any) => {

    this.http.get(environment.CADServiceUrl + 'api/v1/CAdocument/Login' , {responseType: 'text'}).subscribe(result => {
      debugger
      sessionStorage.setItem("UserName", result);
      //alert(sessionStorage.getItem("UserName"));
      this.GetUserManagementList1();
      //window.location.href = result;
    }, error => console.log(error));}

    GetUserManagementList1() {
      debugger
      //this.UserManagement.getRequest1('api/v1/CAdocument/Login').subscribe((any) => {
  
      this.http.get(sessionStorage.getItem("UserName") , {responseType: 'text'}).subscribe(result => {
        debugger
         sessionStorage.setItem("UserName", result);
        //sessionStorage.setItem("UserName", result);
        //alert(sessionStorage.getItem("UserName"));
        //window.location.href = result;
      }, error => console.log(error));}

  Department() {

   var data = [
      {
        id: 1,
        name: 'FUNDS',
      },
      {
        id: 2,
        name: 'KYC',
      },
      {
        id: 3,
        name: 'KYB',
      },
      {
        id: 4,
        name: 'Insurance',
      }]
    // $('.spinner').show();
    // this.ClientAdministration.getRequest('GetClientDetails').subscribe((ClientAdministrationDetails) => {
      
      for (let i = 0; i <= data.length - 1; i++) {
        this.clients.push({
          label: data[i].name, value: data[i].id
        });
      }
    //   $('.spinner').hide();
    // });
  }

  Status()
  {
    var data = [
      {
        id: 1,
        name: 'Active',
      },
      {
        id: 2,
        name: 'In Active',
      }
      ]
    // $('.spinner').show();
    // this.ClientAdministration.getRequest('GetClientDetails').subscribe((ClientAdministrationDetails) => {
      
      for (let i = 0; i <= data.length - 1; i++) {
        this.status.push({
          label: data[i].name, value: data[i].id
        });
      }
    //   $('.spinner').hide();
    // });
  }
 OrderType()
 {
    var data = [
      {
        id: 1,
        name: 'Assimilation',
      },
      {
        id: 2,
        name: 'Client',
      },
      {
        id: 3,
        name: 'EKYB',
      }
      ]
    // $('.spinner').show();
    // this.ClientAdministration.getRequest('GetClientDetails').subscribe((ClientAdministrationDetails) => {
      
      for (let i = 0; i <= data.length - 1; i++) {
        this.orderType.push({
          label: data[i].name, value: data[i].id
        });
      }
    //   $('.spinner').hide();
    // });
  }

  validateAllFormFields(formGroup: FormGroup) {
    debugger
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }


  submitForm(params) {
    debugger
    let formData = params.value;
    this.isSubmitted = true;
    this.validateAllFormFields(this.userManagementForm);
    //this.ValidatePassword(formData["Password"]);
    var data = {};
    if (this.userManagementForm.valid && this.update != true ) {
      $('.spinner').show();
      this.disabled = true;
rememberMeFlag: false
      data={
        "security": true,
        "businesspartner": formData["BusinessPartner"],
        "department": "Department",
        "status": "Active",//formData["Status"],
        "securityname":formData["SecurityName"],
        "ordertype": "ordertype",//formData["OrderType"],
        "isin": formData["ISIN"],
        "avaloqid": formData["AvaloqID"],
        "requester": formData["Requester"],
        "assignto": formData["AssignTo"]
      }
    this.UserManagement.postRequest1('api/v1/CAdocument/InsertCAdocument', data).subscribe((response) => {
debugger
      // if (response.status == 1) {
        $('.close').trigger('click');
        this.Close();
        this.GetUserManagementList();
        this.successmessage("User created successfully");
        this.disabled = false;
        this.isSubmitted = false;
    //   }
    //   else {
    //     $('.spinner').hide();
    //     this.Errormessage(response["message"]);
    //     this.disabled = false;
    //  }
    }, err => {
      this.Errormessage(err.message);
      $('.spinner').hide();
    });
  } 
  
  else {
    debugger
    if (this.userManagementForm.valid && this.update == true) {
      $('.spinner').show();
      this.disabled = true;
    
    data={
      "id":this.uploadData.id,
      "security": true,
      "businesspartner": formData["BusinessPartner"],
      "department": "Department",
      "status": "Active",//formData["Status"],
      "securityname":formData["SecurityName"],
      "ordertype": "ordertype",//formData["OrderType"],
      "isin": formData["ISIN"],
      "avaloqid": formData["AvaloqID"],
      "requester": formData["Requester"],
      "assignto": formData["AssignTo"]
    }
    debugger
      this.UserManagement.putRequest1('api/v1/CAdocument/UpdateCAdocument', data).subscribe((response) => {
        debugger
        // if (response!=null) {
          $('.close').trigger('click');
          this.Close();
          this.GetUserManagementList();
          this.successmessage("User updated Successfully");
          this.disabled = false;

        // }
        // else if (response.status == 3) {
        //     $('.spinner').hide();
        //     this.Errormessage(response["message"]);
        //     this.disabled = false;
        //   } 
        //   else { $('.spinner').hide();
        //     this.Errormessage(response["message"]);
        //     this.disabled = false;
        //   }
        },err => {
          $('.spinner').hide();
        });
        
      }
    }
  }

  exportPdf() {
    
     this.exportPdfcolumn = this.cols.map(col => ({ title: col.header, dataKey: col.field }));
     const doc = new jsPDF('l');
     doc.autoTable(this.exportPdfcolumn,this.userManagement);
     doc.save('UDP_UserManagement' + new Date().getTime() + '.pdf');
   }


  Open() {
    this.selectedValue = 'true';
    this.update = false;
  }

  Close() {
    this.userManagementForm.reset();
    this.isSubmitted = false;
  }

  successmessage(message) {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: message });
  }

  Errormessage(errorsmessage) {
    this.messageService.add({ severity: 'error', summary: 'Error', detail: errorsmessage });
  }

  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }


  editUserManagement(userManagement: any) {
    debugger
    this.update = true;
    this.userManagementForm.controls['Security'].setValue(userManagement.security);
    this.userManagementForm.controls['BusinessPartner'].setValue(userManagement.businesspartner);
    this.userManagementForm.controls['Department'].setValue(userManagement.department);
    this.userManagementForm.controls['Status'].setValue(userManagement.status);
    this.userManagementForm.controls['OrderType'].setValue(userManagement.ordertype);
    this.userManagementForm.controls['ISIN'].setValue(userManagement.isin);
    this.userManagementForm.controls['AvaloqID'].setValue(userManagement.avaloqid);
    this.selectedValue = String(userManagement.active);
    this.userManagementForm.controls['Requester'].setValue(userManagement.requester);
    this.userManagementForm.controls['AssignTo'].setValue(userManagement.assignto);
    //this.userManagementForm.controls['Id'].setValue(userManagement.id);
    this.uploadData = userManagement;
  }


  deleteUser(user) {
    debugger
    this.currentUserId = user.id;
  }

  deleteUserConfirm() {
    var data = {
    //   Id: this.uploadData.id,
    //  //UserLoginId: this.userLoginId
    }

    this.UserManagement.deleteRequest1('api/v1/CAdocument/DeleteCAdocument?id='+this.currentUserId).subscribe((response) => {
      // if (response.status == 1) {
        this.GetUserManagementList();
        $('.modal-close').trigger('click');
        this.successmessage("User deleted successfully");
      // }
      // else {
      //   this.Errormessage(response["message"]);
      // }
    });
  }

}
