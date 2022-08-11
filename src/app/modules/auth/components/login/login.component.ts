import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  loginForm = new FormGroup({
    EmailId : new FormControl("" , [Validators.required, Validators.email]),
    Password : new FormControl("" , [Validators.required, Validators.minLength(8),Validators.maxLength(15)]),

  }
  )
    submitted : boolean = false;
  


  get EmailId() {
    return this.loginForm.get("EmailId") as FormControl;
  }
  get Password() {
    return this.loginForm.get("Password") as FormControl;
  }
  loginSubmited() {
    // if (this.loginForm.valid) {
    //   console.log('valid')
    //   //Logic for valid form
    // } else {
    //   Object.keys(this.loginForm.controls).forEach(field => {
    //   const control : (AbstractControl | null )= this.loginForm.get(field);
    //   control.markAsTouched({ onlySelf: true });
    //  });
    // }
    // if(this.loginForm.valid) {
    //   console.log('it s ok!');
    // }else {
    //   console.log('dirty')
    //   this.loginForm.markAsDirty;
    //   this.loginForm.markAsTouched;
  // }

  
   
    
    // if (this.loginForm.invalid ) {
    //   this.loginForm.get('EmailId').markAsTouched();
    //   this.loginForm.get('Password').markAsTouched();
    //   return; 
    console.log(this.loginForm.value)
    }
  
  }


  // AddData() {
  //   if (this.angForm.valid) {
  //     //Logic for valid form
  //   } else {
  //     Object.keys(this.angForm.controls).forEach(field => {
  //     const control = this.form.get(field);
  //     control.markAsTouched({ onlySelf: true });
  //    });
  //   }
  // }