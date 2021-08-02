import { Component,Input} from "@angular/core";
import { FormControl } from "@angular/forms"
import { formValidators } from "./formValidators";


@Component({
    selector:"control-messages",
    template:`<div *ngIf="errorMessage" class="custom-validation">{{errorMessage}}</div>`
})


export class ControlMessages{

@Input() control:FormControl;
@Input() message:string;
@Input() customMessage:string;


get errorMessage(){
    for(let propertyName in this.control.errors)
    {
        if(this.control.errors.hasOwnProperty(propertyName) && this.control.touched){
            return formValidators.getValidatorErrorMessage(propertyName,this.control.errors[propertyName],this.message,this.customMessage)
        }
    }
    return null;
}


} 