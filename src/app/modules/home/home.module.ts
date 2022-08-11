import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';


@NgModule({
  declarations: [
    HomeComponent,
   
    
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    RouterModule,
    AppRoutingModule,
  ]
})
export class HomeModule { }
