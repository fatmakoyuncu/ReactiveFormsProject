import { AbstractControl, ValidationErrors } from "@angular/forms";

export class PatternValidators{
    static isValidExtension(control: AbstractControl): ValidationErrors | null {
        const regex = new RegExp('^[a-zA-Z0-9_.-]{3,16}$');

        if(!regex.test(control.value)){
            return {
                isError: true
            };
        }

        return null;
        
        
    }
    
}