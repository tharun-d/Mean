import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';
import { Directive, Input } from '@angular/core';

@Directive({
    selector: '[appConfirmEqualValidator]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: ConfirmEqualValidatorDirective,
        multi: true
    }]
})
export class ConfirmEqualValidatorDirective implements Validator {
    @Input() appConfirmEqualValidator: string;
    validate(control: AbstractControl): { [key: string]: any } | null {
        const controlToCompare = control.parent.get(this.appConfirmEqualValidator);
        if (controlToCompare && (controlToCompare.value !== control.value)) {
            return { 'notEqual': true };
        } else {
        return null;
        }
    }
}


// validate methodsreturn key value pair if there is error else it returns null,
// control fill have confirmpassword value and appConfirmEqualValidator will have password field
// control.parent will go to mail form group and get the value of required name
// controlToCompare is true if it has value
