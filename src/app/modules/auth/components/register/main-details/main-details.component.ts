import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-main-details',
  templateUrl: './main-details.component.html',
  styleUrls: ['./main-details.component.scss']
})
export class MainDetailsComponent implements OnInit {
  jobroleform : FormGroup;
  items: Array<any> = [
    { name: 'Instructional designer', value: 'Instructional designer' },
    { name: 'Software engineer', value: 'Software engineer' },
    { name: 'Software quality engineer', value: 'Software quality engineer' },
  ];
  

  constructor( private location :Location , private formBuilder: FormBuilder) {
    this.jobroleform = this.formBuilder.group({
      checkArray: this.formBuilder.array([], [Validators.required]),
    });
   }
  back() : void{
    this.location.back();
  }
  
  ngOnInit(): void {



  }
  onCheckboxChangeValue(data: any) {
    const checkArray: FormArray = this.jobroleform.get('checkArray') as FormArray;
    if (data.target.checked) {
      checkArray.push(new FormControl(data.target.value));
    } else {
      let i: number = 0;
      checkArray.controls.forEach((item: any) => {
        if (item.value == data.target.value) {
          checkArray.removeAt(i);
          return;
        }
        i++;
      });
    }
  }

  MainDetailsForm = new FormGroup({
    FirstName : new FormControl("" , [Validators.required , Validators.minLength(3) , Validators.pattern("[a-zA-Z].*")]),
    LastName : new FormControl("" , [Validators.required , Validators.minLength(3) , Validators.pattern("[a-zA-Z].*")]),
    EmailId : new FormControl("" , [Validators.required , Validators.email]),
    MobileNo : new FormControl("" , [Validators.required, Validators.pattern("[0-9]*"),  Validators.minLength(10),  Validators.maxLength(10)]),

    
    Resume : new FormControl(""),
    PortfolioWeb : new FormControl(""),
    
    ReferralName : new FormControl(""),
    MailUpdate : new FormControl("" ),
    DisplayPicture : new FormControl(""),


  });

  MainDetailsSubmited() {
    console.log(this.MainDetailsForm.value);
    console.log(this.jobroleform.value)
  }
  get FirstName() {
    return this.MainDetailsForm.get("FirstName") as FormControl;
  }
  get LastName() {
    return this.MainDetailsForm.get("LastName") as FormControl;
  }
  get EmailId() {
    return this.MainDetailsForm.get("EmailId") as FormControl;
  }
  get MobileNo() {
    return this.MainDetailsForm.get("MobileNo") as FormControl;
  }
  
 
 



}
