import { Component} from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  constructor(private fb:FormBuilder) { }

  form=this.fb.group({
    fullName:[
      null,
      [
        Validators.required,
        Validators.pattern(/^[A-z0-9]*$/),
        Validators.minLength(8)
      ],
    ],
    email:[
      null,
      [
        Validators.required,
        Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/),
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
    }
    else{
      console.log("Form not get submitted")
    }
  }

}
