import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-create-account-bar',
  templateUrl: './create-account-bar.component.html',
  styleUrls: ['./create-account-bar.component.scss']
})
export class CreateAccountBarComponent implements OnInit {

  constructor(private location :Location) { }

  back() : void{
    this.location.back();
  }
  ngOnInit(): void {
  }

}
