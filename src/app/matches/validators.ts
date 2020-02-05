import { AbstractControl, ValidatorFn } from '@angular/forms';

export function numPlayersValidator(num: number): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
        const numP: number = (control.value) ;
        console.log(numP);
        return numP <= num ? { ageValidator : 'Age should be more than zero'} : null ;
    };
}



