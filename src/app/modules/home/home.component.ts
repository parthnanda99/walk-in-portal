import { Component, OnInit } from '@angular/core';
import { NavBarComponent } from 'src/app/shared/components/nav-bar/nav-bar.component';
NavBarComponent
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
