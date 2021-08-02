import { FormGroup, FormControl, AbstractControl } from '@angular/forms';

export class formValidators {
    static getValidatorErrorMessage(validatorName: string, validatorValue?: any, message?: string, customMessage?: string) {
        var required = message ? `${message} is required` : customMessage;
        let config = {
            'required': `${required}`,
            'max': `Max limit is ${validatorValue.max}`,
            'minlength': `Minimum length should be ${validatorValue.requiredLength} characters`,
            'maxlength': `Maximum length should be ${validatorValue.requiredLength} characters`,
            'whitespace': `${message} is invalid`,
            'blankWhitespace': `${message} is invalid`,
            'alphanumeric': `${message} should be alphanumeric only`,
            'alphanumericComma': `${message} should be alphanumeric only`,
            'alphabetical': `${message} should be alphabets only`,
            'alphabeticalComma':`${message} should be alphanumeric only`,
			'nonNumeric': `${message} should not be numeric only`,
            'numeric': `${message} should be numeric only`,
            'numericComma': `${message} should be numeric only`,
            'password': `${customMessage}`,
            'confirmPassword': `The password does not match!`,
            'email': `${customMessage}`,
            'address': `${customMessage}`,
            'url': `${customMessage}`,
            'mobile': `Please enter a valid ${message}`,
            'dateValidator': `${customMessage}`,
            'dateValidator1': `${customMessage}`,
            'greaterValidator': `${customMessage}`,
            'fileValidator': `File should be in xlsx/csv format`,
            'decimal': `${message} accepts decimal upto two places only`,
            'decimalComma': `${message} accepts decimal upto two places only`,
            'integerDecimal': `${message} should be decimal only`,
            'restricSpechar': `${message} is invalid`,
            'zero': `${message} should not be zero`,
            'columnValidator': `Invalid ${message}`,
            'spaceRestrict': `Space not allowed`,
            'standardNamingRegex':`${customMessage}`,
            'standardNamingRegexAllowEmpty':`${customMessage}`,
            'standardNamingWithcomma':`${customMessage}`
        };
        return config[validatorName] ? config[validatorName] : null;
    }


    static blankWhitespace(control) {


        if (!(control.value && control.value.match(/^(?=.*[a-z]).+$/gi))) {
            return { 'blankWhitespace': true };
        }


        const isWhitespace = (control.value || '').trim().length === 0;
        const isValid = !isWhitespace;
        return isValid ? null : { 'blankWhitespace': true };
       
    }


    static noWhitespace(control) {
        if (!(control.value && control.value.match(/^(\w+\s?)*\s*$/))) {
            return { 'whitespace': true };
        }
        const isWhitespace = (control.value || '').trim().length === 0;
        const isValid = !isWhitespace;
        return isValid ? null : { 'whitespace': true };
       
    }


    static alphanumeric(control) {
        if (control.value && control.value.match(/^[0-9a-zA-Z ]+$/)) {
            return null;
        } else if (control.value == '' || control.value == null) {
            return null;
        } else {
            return { 'alphanumeric': true };
        }
    }

    static alphanumericComma(control) {
        if (control.value && control.value.match(/^[0-9a-zA-Z ,]+$/)) {
            return null;
        } else {
            return { 'alphanumericComma': true };
        }
    }


    static columnValidator(control) {
        if (control.value && control.value.match(/^[a-zA-Z0-9]*$/)) {
            return null;
        } else {
            return { 'columnValidator': true };
        }
    }

    static alphabeticalComma(control) {
        if (control.value == null) {
            return null;
        }
        else {
            if ((control.value && control.value.match(/^\d*[a-zA-Z0-9][ a-zA-Z0-9_-]*$/)) || control.value == "") {
                return null;
            } else {
                // return { 'alphabeticalComma': true };
            }
        }
    }

    static alphabetical(control) {
        if ((control.value && control.value.match(/^[a-zA-Z ]+$/)) || control.value == "") {
            return null;
        } else {
            return { 'alphabetical': true };
        }
    }
	
	static nonNumeric(control) {
        if ((control.value && !control.value.match(/^[0-9]+$/)) || control.value == "") {
            return null;
        } else {
            return control.value ? { 'nonNumeric': true } : null;
        }
    }

    static numeric(control) {
        if(control.value != null){
            if(control.value.substring(0,3) === '000'){
                return control.value ? { 'numeric': true } : null;
            }else{
                if ((control.value && control.value.match(/^[0-9]+$/)) || control.value == "") {
                    return null;
                } else if (control.value == '' || control.value == null) {
                    return null;
                } else {
                    return control.value ? { 'numeric': true } : null;
                }
            }
        }        
        
    }

    static numericComma(control) {
        if ((control.value && control.value.match(/^[0-9,]+$/)) || control.value == "") {
            return null;
        } else {
            return control.value ? { 'numericComma': true } : null;
        }
    }


    static numericSpace(control) {
        if (control.value && control.value.match(/^[0-9 ]+$/)) {
            return null;
        } else {
            return control.value ? { 'numeric': true } : null;
        }
    }

    static zero(control) {
        if (control.value && control.value.match(/^[0]+$/)) {
            return control.value ? { 'zero': true } : null;
        } else {
            return null;
        }
    }

    static decimal(control) {
        //^[0-9]+(.[0-9]{0,2})?$

        if ((control.value && control.value.match(/^[0-9]\d{0,30}(\.\d{1,2})?%?$/)) || control.value == "") {
            return null;
        } else if (control.value == '' || control.value == null) {
            return null;
        } else {
            return { 'decimal': true };
        }
    }

    static decimalComma(control) {
        //^[0-9]+(.[0-9]{0,2})?$
        if ((control.value && control.value.match(/(?:\d{1,3}(?:,\d{3})*(?:\.\d\d)?|\.\d\d)(?=\s|$)/)) || control.value == "") {
            return null;
        } else {
            return { 'decimal': true };
        }
    }



    static integerDecimal(control) {
        if ((control.value && control.value.match(/^[0-9]\d*(\.\d+)?$/)) || control.value == "") {
            return null;
        } else {
            return { 'integerDecimal': true };
        }
    }


    static restricSpechar(control) {
        if (control.value && control.value.match(/^[a-zA-Z0-9](?!.*?[^\na-zA-Z0-9]{2}).*?[a-zA-Z0-9]$/)) {
            return null;
        } else {
            return { 'restricSpechar': true };
        }

    }

    static spaceRestrict(control) {
        if (control.value && control.value.match(/^\S*$/)) {
            return null;
        } else {
            return { 'spaceRestrict': true };
        }
    }

    static password(control) {
        if (control.value && control.value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/)) {
            return null;
        } else {
            return { 'password': true };
        }
    }

    static confirmPassword(control: AbstractControl) {
        const group = control.parent;
        if (group) {
            let pass = group.controls['password'].value;
            let confirmPass = group.controls['confirmPassword'].value;
            return pass === confirmPass ? null : { confirmPassword: true }
        } else {
            return null;
        }
    }
    static email(control) {
        //if (control.value && control.value.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/igm)) {
        //if (control.value && control.value.match(/([a-zA-Z0-9]+)([\_\.\-{1}])?([a-zA-Z0-9]+)\@([a-zA-Z0-9]+)([\.])([a-zA-Z\.]+)/g)) {
            // if (control.value && control.value.match(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/g)) {
                // if (control.value && control.value.match(/^[a-z]+([a-z0-9]+)?(_{1,1})?(-{1,1})?(\.{1,1})?([a-z0-9]+)?@[a-z0-9]+\.[a-z]+$/gi)) {


        if (control.value && control.value.match(/^[a-z]+[a-z0-9]+(_{1,1}[a-z0-9]+)?(-{1,1}[a-z0-9]+)?(\.{1,1}[a-z0-9]+)?([a-z0-9]+)?@[a-z0-9]+\.[a-z]+$/gi)) {

            return null;
        } else {
            return { 'email': true };
        }
    }


    static address(control) {

        if (control.value && control.value.match(/^(?=.*[a-zA-Z])[&#.()0-9a-zA-Z\s,-]+$/g)) {
            return null;
        } else {
            return { 'address': true };
        }
    }


    static description(control) {

        if (control.value && control.value.match(/^[a-zA-Z0-9,.!? ]*$/g)) {
            return null;
        } else {
            return { 'description': true };
        }
    }


    static url(control) {
        // For  optional https://use below
        // ^(https:|http:)?(\/{2})?[a-z0-9]+([a-z0-9]+)?\.[a-z]+((\/[a-z0-9]+)?)+$
        // For  mandatory https://use below
        // ^(https:|http:)(\/{2})[a-z0-9]+([a-z0-9]+)?\.[a-z]+((\/[a-z0-9]+)?)+$
        // if (control.value && control.value.match(/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/)) {
            
            // ^(https:|http:)(\/{2})[a-z0-9]+([a-z0-9.?+=%&_#-]+)?\.[a-z]+((\/[a-z0-9?+=%&_#-]+)?)+$

            // if (control.value && control.value.match(/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/gi)) {

        if (control.value && control.value.match(/^(https:|http:)(\/{2})[a-z]+([a-z0-9.?+=%&_#-]+)?\.[a-z]+((\/[a-z0-9?+=%&_#-]+)?)+$/)) {

            return null;
        } else {
            return { 'url': true };
        }
    }


    static mobile(control) {
        if (control.value && control.value.match((/^(1-)?\d{3}-\d{3}-\d{4}$/))) {
            var controlValue = control.value.replace(/-/g, '');
            if (controlValue == 0 || control.value.match(/^0+(?!$)/)) {
                return { "mobile": true }
            } else {
                return null;
            }
        } else if (control.value == "") {
            return null;
        } else {
            return { "mobile": true }
        }
    }
    static dateValidator(control: AbstractControl) {
        const group = control.parent;
        if (group) {
            if (group.controls['endDate'].value && group.controls['startDate'].value) {
                if (new Date(group.controls['endDate'].value) <= new Date(group.controls['startDate'].value)) {
                    return { 'dateValidator': true };
                } else {
                    group.controls['startDate'].errors = null;
                    group.controls['endDate'].errors = null;
                    return null;
                }
            }
        } else {
            return null;
        }

    }

    static dateValidator1(control: AbstractControl) {
        const group = control.parent;
        if (group) {
            if (group.controls['endDate'].value && group.controls['startDate'].value) {
                if (new Date(group.controls['endDate'].value) < new Date(group.controls['startDate'].value)) {
                    return { 'dateValidator1': true };
                } else {
                    group.controls['startDate'].errors = null;
                    group.controls['endDate'].errors = null;
                    return null;
                }
            }
        } else {
            return null;
        }

    }

    static greaterValidator(control: AbstractControl) {
        const group = control.parent;
        if (group) {
            if (group.controls['from'].value && group.controls['to'].value) {
                if ((group.controls['to'].value) <= (group.controls['from'].value)) {
                    return { 'greaterValidator': true };
                } else {
                    group.controls['from'].errors = null;
                    group.controls['to'].errors = null;
                    return null;
                }
            }
        } else {
            return null;
        }

    }

    static fileValidator(control) {
        if (control.value && control.value.match(/^.+\.(xlsx|csv)$/)) {
            return null;
        } else {
            return { 'fileValidator': true };
        }

    }

    static date(control: AbstractControl) {
        const group = control.parent;
        if (group) {
            if (group.controls['to'].value && group.controls['from'].value) {
                if (new Date(group.controls['to'].value) <= new Date(group.controls['from'].value)) {
                    return { 'dateValidator': true };
                } else {
                    return null;
                }
            }
        } else {
            return null;
        }

    }

    // allow alphabets only No number No character
    static standardNamingRegex(control){
        if (control.value && control.value.match(/^\d*[a-zA-Z][a-zA-Z ]*$/)) {
            return null
        } else {
            return {'standardNamingRegex':true};
        }
    }
   
   
 // ex: "ab,ab, ab, cd" = true
    static standardNamingWithcomma(control){
        if (control.value && control.value.match(/^\d*[a-zA-Z][a-zA-Z, ]*$/)) {
            return null
        } else {
            return {'standardNamingWithcomma':true};
        }
    }


    static standardNamingRegexAllowEmpty(control){
        // /^\d*[a-zA-Z][ a-zA-Z0-9_@\-]*$/
        if(control.value && control.value !== ''){
           
           if(control.value && control.value.match(/^(?<big>\d*[a-zA-Z][ a-zA-Z0-9_@,-]+)*$/)) {
            return null;
         }else{
            return {'standardNamingRegexAllowEmpty':true}
         }
            
        } else {
            return null;
        }
    }




}