import { AbstractControl, FormGroup, FormArray } from '@angular/forms';

export class CustomValidator {

    static mobileNoValidator(control: AbstractControl) {
        const mobileNo = control.value as string;
        if (mobileNo.startsWith('91')) {
            return null;
        } else {
            return { invalidNumber: true };
        }
    }

    static validateDateRange(form: FormGroup) {
        const historyForm = form['controls'].previousHistory as FormArray;
        for (const control of historyForm['controls']) {
            const fromDate = control.get('fromDate');
            const toDate = control.get('toDate');
            console.log(fromDate.value);
            console.log(toDate.value);
            if (fromDate.value < toDate.value) {
                fromDate.setErrors(null);
                return null;
            } else {
                fromDate.setErrors({invalidDate: true});
                return {invalidDate: true};
            }

        }
    }
}