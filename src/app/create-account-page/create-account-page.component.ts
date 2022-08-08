import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'create-account-page',
  templateUrl: './create-account-page.component.html',
  styleUrls: ['./create-account-page.component.scss']
})
export class CreateAccountPageComponent implements OnInit {

  constructor(private location: Location) { }

  back() : void{
    this.location.back();
  }
  ngOnInit(): void {
  }

}
