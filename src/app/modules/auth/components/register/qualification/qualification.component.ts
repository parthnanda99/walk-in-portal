import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-qualification',
  templateUrl: './qualification.component.html',
  styleUrls: ['./qualification.component.scss']
})
export class QualificationComponent implements OnInit {

  constructor(private location :Location) { }

  back() :void {
    this.location.back();
  }

  ngOnInit(): void {

    const edu_menu_open = document.querySelector('.img-contain') as HTMLElement;
    const quali_details = document.querySelector('.qualifications-details') as HTMLElement;
    
    edu_menu_open.addEventListener('click', () => {
      quali_details.style.display = quali_details.style.display == 'block' ? 'none' : 'block';
      edu_menu_open.style.transform = edu_menu_open.style.transform == "none" ? 'rotate(180deg)' : "none";
    })
    
    
    
    
    const ap1 = document.querySelector('.ap1') as HTMLElement;
    const ap2 = document.querySelector('.ap2') as HTMLElement;
    const fresher = document.querySelector('.fresher') as HTMLElement;
    const experienced = document.querySelector('.experienced') as HTMLElement;
    const yes = document.querySelector(".yes") as HTMLElement;
    const no = document.querySelector(".no") as HTMLElement;
    const noticeInfo = document.querySelector(".notice-info") as HTMLElement;
    

    
    ap1.addEventListener('click',(e)=>{
        experienced.style.display="none";
        fresher.style.display="block";
    
    })
    ap2.addEventListener('click',(e)=>{
        fresher.style.display="none";
        experienced.style.display="block";
      
    })
    yes.addEventListener('click',(e)=>{
        noticeInfo.style.display="flex";
       
    })
    no.addEventListener('click',(e)=>{
        noticeInfo.style.display="none";

    })
    
    const prof_menu_open = document.querySelector('.prof_qualification_image') as HTMLElement;
    const applicant_type = document.querySelector('.prof_qualification_menu') as HTMLElement;
    
    prof_menu_open.addEventListener('click', () => {
      applicant_type.style.display = applicant_type.style.display == 'contents' ? 'none' : 'contents';
      prof_menu_open.style.transform = prof_menu_open.style.transform == "none" ? "rotate(180deg)" : 'none';
    });
    
      }

      EducationDetailsForm = new FormGroup({
        Percentage : new FormControl("" , [Validators.required , Validators.minLength(2) , Validators.pattern("[0-9]*[0-9]")]),
        CollegeLocation : new FormControl("" , [Validators.required ,Validators.minLength(3), Validators.pattern("[a-zA-Z].*")]),
        SelectYear : new FormControl("" , [Validators.required]),
        SelectDegree : new FormControl("" , [Validators.required]),
        SelectStream : new FormControl("" , [Validators.required]),
        SelectCollege : new FormControl("" , [Validators.required]),
     
  
        // EmailId : new FormControl("" , [Validators.required , Validators.email]),
        // MobileNo : new FormControl("" , [Validators.required, Validators.pattern("[0-9]*"),  Validators.minLength(10),  Validators.maxLength(10)]),
      
    
    
      })
      ProfDetailsForm = new FormGroup({
        yearExperience : new FormControl("" , [Validators.required , Validators.pattern("[0-9]*[0-9]")]),
        currentCTC : new FormControl("" , [Validators.required , Validators.pattern("[0-9]*[0-9]")]),
        expectedCTC  : new FormControl("" , [Validators.required , Validators.pattern("[0-9]*[0-9]")]),

      })

      get Percentage() {
        return this.EducationDetailsForm.get("Percentage") as FormControl;
      }
      
      get CollegeLocation() {
        return this.EducationDetailsForm.get("CollegeLocation") as FormControl;
      }
      
      get SelectYear() {
        return this.EducationDetailsForm.get("SelectYear") as FormControl;
      }
      get SelectDegree() {
        return this.EducationDetailsForm.get("SelectDegree") as FormControl;
      }
      get SelectStream() {
        return this.EducationDetailsForm.get("SelectStream") as FormControl;
      }
      get SelectCollege() {
        return this.EducationDetailsForm.get("SelectCollege") as FormControl;
      }
      get yearExperience() {
        return this.ProfDetailsForm.get("yearExperience") as FormControl;
      }
      get currentCTC() {
        return this.ProfDetailsForm.get("currentCTC") as FormControl;
      }
      get expectedCTC() {
        return this.ProfDetailsForm.get("expectedCTC") as FormControl;
      }
      qualificationSubmit(){
        console.log(this.EducationDetailsForm.value , this.ProfDetailsForm.value)
      
      }
    
    }
    