import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qualification',
  templateUrl: './qualification.component.html',
  styleUrls: ['./qualification.component.scss']
})
export class QualificationComponent implements OnInit {

  constructor() { }

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
    const on1 = document.querySelector(".on1") as HTMLElement;
    const on2 = document.querySelector(".on2") as HTMLElement;
    const off1 = document.querySelector(".off1") as HTMLElement;
    const off2 = document.querySelector(".off2") as HTMLElement;
    const yes = document.querySelector(".yes") as HTMLElement;
    const no = document.querySelector(".no") as HTMLElement;
    const noticeInfo = document.querySelector(".notice-info") as HTMLElement;
    
    const on3 = document.querySelector(".on3") as HTMLElement;
    const on4 = document.querySelector(".on4") as HTMLElement;
    const off3 = document.querySelector(".off3") as HTMLElement;
    const off4 = document.querySelector(".off4") as HTMLElement;
    
    ap1.addEventListener('click',(e)=>{
        experienced.style.display="none";
        fresher.style.display="block";
        on1.style.display="block"
       off1.style.display="none"
       on2.style.display="none"
       off2.style.display="block"
    })
    ap2.addEventListener('click',(e)=>{
        fresher.style.display="none";
        experienced.style.display="block";
        on2.style.display="block";
        off2.style.display="none";
        on1.style.display="none";
        off1.style.display="block";
    })
    yes.addEventListener('click',(e)=>{
        noticeInfo.style.display="flex";
        on3.style.display="block";
       off3.style.display="none";
       on4.style.display="none";
       off4.style.display="block";
    })
    no.addEventListener('click',(e)=>{
        noticeInfo.style.display="none";
        on4.style.display="block";
        off4.style.display="none";
        on3.style.display="none";
        off3.style.display="block";
    })
    
    const prof_menu_open = document.querySelector('.prof_qualification_image') as HTMLElement;
    const applicant_type = document.querySelector('.prof_qualification_menu') as HTMLElement;
    
    prof_menu_open.addEventListener('click', () => {
      applicant_type.style.display = applicant_type.style.display == 'contents' ? 'none' : 'contents';
      prof_menu_open.style.transform = prof_menu_open.style.transform == "none" ? "rotate(180deg)" : 'none';
    });
    
      }
    
    
    }
    