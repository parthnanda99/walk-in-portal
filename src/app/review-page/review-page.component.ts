import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-review-page',
  templateUrl: './review-page.component.html',
  styleUrls: ['./review-page.component.scss']
})
export class ReviewPageComponent implements OnInit {

  constructor(private location: Location) { }
 
  back() : void{
    
    this.location.back();
  }

  ngOnInit(): void  {
  
    
  }


}
