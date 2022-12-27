import { Component} from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import {fullName,ageOf} from './validate/verify.validation'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
[x: string]: any;
passwordInput: any;

  constructor(private fb:FormBuilder) { }

  // userName(/[A-z]/)
  form=this.fb.group({
    fullName:['',fullName],
    age:['',ageOf],
    email:[
      null,
      [
        Validators.required,
        Validators.pattern(/^[a-z0-9]((\.|\+)?[a-z0-9]){5,}@g(oogle)?mail\.com$/),
      ],
    ],
    password:[
      null,
      [
        Validators.required,
        Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8})/),
        // Validators.minLength(8)
      ],
    ],
  });

  
  onSubmit(){ 
    if(this.form.valid){
      console.log('Form Submitted successfully');
      console.log(this.form.get('password')?.value)
    }
    else{
      console.log("Form not get submitted")
    }
  }
  // getchanged(){
  //   console.log("Value is "+this.value);
  // }

}