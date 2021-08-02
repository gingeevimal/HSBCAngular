import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';
import { FormBuilder, FormGroup, Validators, FormControl } from "@angular/forms";
import { LoginService } from '../services/login.service';
import { HttpClient } from '@angular/common/http';
import { formValidators } from '../helper/formValidators';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { NgForm } from '@angular/forms';
import { Router } from "@angular/router";
import { AuthguardService } from '../guard/authguard.service';
declare var $: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  providers: [CommonService, MessageService, ToastModule, AuthguardService],
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: any;
  inputVar:string;
  loginForm: FormGroup;
  inputVar1:string;

  constructor(private auth: AuthguardService, private router: Router, private http: HttpClient, private formBuilder: FormBuilder, private Login: LoginService, private messageService: MessageService) { 
  this.inputVar = "mailadmin@mobiusservices.com";
  this.inputVar1 = "Mobius@123";


  }

  ngOnInit() {


    this.loginForm = this.formBuilder.group({
      UserName: ["", [Validators.required, formValidators.email, Validators.maxLength(50)]],
      Password: ["", [Validators.required, Validators.maxLength(50)]],
      RememberMe: [false]
    });
  }

  public get getFields() {
    return this.loginForm.controls;
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
    this.validateAllFormFields(this.loginForm);
    if (this.loginForm.valid) {
      var data = {
        UserName: formData["UserName"],
        Password: formData["Password"],
      }
      this.Login.postRequest('login', data).subscribe((response) => {
        debugger;
        if (response != null && response.length > 0) {
          if(response[0].wxAccountId){
            localStorage.setItem('wxaccountId', response[0].wxAccountId);
          }else{
            localStorage.setItem('wxaccountId', '1'); 
          }
          
          localStorage.setItem('user_role_id', response[0].roleId);
          localStorage.setItem('user_name', response[0].userName);
          localStorage.setItem('email', response[0].email);
          localStorage.setItem('user_id', response[0].userId);
          localStorage.setItem('client_id', response[0].clientId);
          // if (Number(response[0].roleId) === 2) {
          //   this.auth.sendToken(response[0].email)
          //   $('.spinner').hide();
          //   this.router.navigate(['UserManagement']);
            
          // } else if (Number(response[0].roleId) === 1) {
          //   this.auth.sendToken(response[0].email)
          //   $('.spinner').hide();
          //   this.router.navigate(['UserManagement']);
          // }
           if (1== 1) {
            this.auth.sendToken(response[0].email)
            $('.spinner').hide();
            this.router.navigate(['UserManagement']);
          }
          else if (Number(response[0].roleId) === 11) {
            this.auth.sendToken(response[0].email)
            $('.spinner').hide();
            this.router.navigate(['mdashboard']);
          }
          else {
            this.Errormessage(response.message);
            $('.spinner').hide();
          }
        }
        else {
          this.Errormessage("Invalid Username and Password");
          $('.spinner').hide();
        }
      }, err => {
        $('.spinner').hide();
        this.Errormessage(err.message)
      });
    }else{
      $('.spinner').hide();
    }
  }


  Errormessage(errorsmessage) {
    this.messageService.add({ severity: 'error', summary: 'Error', detail: errorsmessage });
  }

}
