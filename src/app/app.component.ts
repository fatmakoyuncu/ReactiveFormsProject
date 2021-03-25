import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, PatternValidator, Validators } from '@angular/forms';
import { PatternValidators } from './pattern.validators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  message: string;
  
  singinForm: FormGroup;

  submitted=false;

  constructor(private fb: FormBuilder){

  }

  ngOnInit(){
    this.singinForm = new FormGroup({
      username: new FormControl(null, [Validators.required, Validators.minLength(4), PatternValidators.isValidExtension]),
      password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
      confirmPassword: new FormControl(null, [Validators.required,Validators.minLength(8)])
    }, this.PasswordMatchValidator);

  }

  PasswordMatchValidator(fg: FormGroup): Validators{
    return fg.get('password').value === fg.get('confirmPassword').value ? null : {notmatched: true};
  }

  singinUser(){
    this.submitted = true;
   
    console.log(this.singinForm.status);
    console.log(this.singinForm.value);
    console.log(this.singinForm.get('username').value);

    this.message = "Tebrikler " +"''"+ this.singinForm.get('username').value + "''"+" Kaydınız başarıyla tamamlanmıştır." ;

    this.singinForm.reset();
  }
  
}

// Validators.pattern('^[a-zA-Z0-9_.-]{3,16}$')