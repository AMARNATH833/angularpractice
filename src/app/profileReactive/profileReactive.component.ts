import { Component} from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-profileReactive',
  templateUrl: './profileReactive.component.html',
  styleUrls: ['./profileReactive.component.css']
})
export class ProfileReactiveComponent{

  constructor() { } 

  // Validators.required,Validators.maxLength(2),Validators.minLength(2)

  profileForm=new FormGroup({
    firstName:new FormControl(''),
    lastName:new FormControl(''),
    password:new FormControl(''),
    conformPassword:new FormControl('')
    
  })
  address=new FormGroup({ 
    street:new FormControl('',Validators.required),
    city:new FormControl('',{nonNullable:true}),
    pincode:new FormControl('')
  })

  // get password(){
    
  // }

  onSubmit(){
    console.warn(this.profileForm.value);
    
  }
  onSubmitAdd(){
    console.warn(this.address.value);
  }
}
