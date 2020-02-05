import { AbstractControl, ValidatorFn } from '@angular/forms';

export function ageValidator(num: number): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
        const age: number = (control.value) ;

        return age <= num ? { ageValidator : 'Age should be more than zero'} : null ;
    };
}
