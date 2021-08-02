import { Component, OnInit } from '@angular/core';
import { ToastModule } from 'primeng/toast';
import { FormBuilder, FormGroup, Validators, FormControl } from "@angular/forms";
import { MessageService } from 'primeng/api';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { formValidators } from '../helper/formValidators';
declare var $: any
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  providers: [ToastModule,MessageService],
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  clientAdministrationForm: FormGroup;
  selectedValue: any;
  clientAdministration: any;
  showCount: boolean;
  disabled:boolean;
  uploadData: any;
  webUrl: string;
  organizationName: string;
  pointOfContact: string;
  phoneNumber: string;
  firstName: string;
  lastName: string;
  address: string;
  password: string;
  emailId: string;
  userId: number;
  userLoginId: number;
  displayModal: boolean;
  successMessage: any;
  PasswordErrorMessage: string;
  isSubmitted = false;
  public showPassword:any = false;
  constructor(private router: Router, private http: HttpClient, private formBuilder: FormBuilder,  private messageService: MessageService) { 
  }
  
  ngOnInit() {
    $('#pwdToolTip').tooltip();
    this.clientAdministrationForm = this.formBuilder.group({
      OrganizationName: ["", [Validators.required, formValidators.blankWhitespace, Validators.maxLength(50)]],
      WebUrl: ["", [Validators.required,formValidators.url, Validators.maxLength(200)]],
      Address: ["", [Validators.required, formValidators.blankWhitespace, Validators.maxLength(200)]],
      FirstName: ["", [Validators.required, formValidators.alphabetical, formValidators.noWhitespace, Validators.maxLength(50)]],
      LastName: ["", [Validators.required, formValidators.alphabetical, formValidators.noWhitespace, Validators.maxLength(50)]],
      Email: ["", [Validators.required, formValidators.email, Validators.maxLength(50)]],
      Password: ["", [Validators.required, formValidators.password, Validators.minLength(8), Validators.maxLength(15)]],
      PhoneNumber: ["", [Validators.required, formValidators.noWhitespace, formValidators.numeric, Validators.minLength(8), Validators.maxLength(15)]],
      active: "",
      rememberMeFlag: [false]
    });
  }

  public get getFields() {
    return this.clientAdministrationForm.controls;
  }


   validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }

  submitForm(formData) {
    $('.spinner').show();
  
    this.validateAllFormFields(this.clientAdministrationForm);
    this.ValidatePassword(formData["Password"]);
    if (this.clientAdministrationForm.valid && this.PasswordErrorMessage == 'true') {

      

      
    }else{
      $('.spinner').hide();
      this.isSubmitted = true;
    }
  }

  ValidatePassword(password: string) {
    var input = password;
    if (input == null || input == '') {
      this.PasswordErrorMessage = "Password should not be empty";
    }
    var hasNumber = new RegExp("[0-9]+");
    var hasUpperChar = new RegExp("[A-Z]+");
    var hasMiniMaxChars = new RegExp("^.{8,15}$");
    var hasLowerChar = new RegExp("[a-z]+");
    //  var hasSymbols = new RegExp("[!@#$%^&*()_+=\[{\]};:<>|./?,-]");
    var hasSymbols = new RegExp("[!@#$%^&*(),.?/:{}|<>]");

    if (!hasUpperChar.test(input)) {
      // this.PasswordErrorMessage = "Password should contain at least one upper case letter.";
      this.PasswordErrorMessage = "Please enter a valid password.";
      return this.PasswordErrorMessage;
    }
    else if (!hasLowerChar.test(input)) {
      // this.PasswordErrorMessage = "Password should contain at least one lower case letter.";
      this.PasswordErrorMessage = "Please enter a valid password.";
      return this.PasswordErrorMessage;
    }
    else if (!hasMiniMaxChars.test(input)) {
      // this.PasswordErrorMessage = "Password should be min 8 to 15 characters.";
      this.PasswordErrorMessage = "Please enter a valid password.";
      return this.PasswordErrorMessage;
    }
    else if (!hasNumber.test(input)) {
      // this.PasswordErrorMessage = "Password should contain at least one numeric value.";
      this.PasswordErrorMessage = "Please enter a valid password.";
      return this.PasswordErrorMessage;
    } else if (!hasSymbols.test(input)) {
      // this.PasswordErrorMessage = "Password should contain at least one special case character.";
      this.PasswordErrorMessage = "Please enter a valid password.";
      return this.PasswordErrorMessage;
    }
    else {
      return this.PasswordErrorMessage = 'true';
    }
  }

  showModalDialog(message: any) {
    this.displayModal = true;
    this.successMessage = message;
}

// Navigate(){
//   this.router.navigate(['login']);
// }

 numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }


  Close() {
    this.clientAdministrationForm.reset();
  }

  successmessage(message) {
    this.messageService.add({severity:'success', summary:'Success', detail:message});
 }

 Errormessage(errorsmessage) {
   this.messageService.add({ severity: 'error', summary: 'Error', detail: errorsmessage });
 }
 showingpwd(){
  if(this.showPassword){
    this.showPassword = false;

  }else{
    this.showPassword = true;
  }
}


}
