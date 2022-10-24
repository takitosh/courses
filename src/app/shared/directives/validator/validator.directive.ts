import {Directive} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from '@angular/forms';
import {createEmailValidator} from '../../validators/emailValidator.validator';

@Directive({
  selector: "[emailValidator]",
  providers: [{
    provide: NG_VALIDATORS,
    useExisting:emailValidatorDirective,
    multi: true
  }]
})
export class emailValidatorDirective implements Validator {

  validate(control: AbstractControl): ValidationErrors | null {
    return createEmailValidator()(control);
  }
}
