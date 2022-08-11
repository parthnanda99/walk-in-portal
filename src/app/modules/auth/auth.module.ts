import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { QualificationComponent } from './pages/register/qualification/qualification.component';
import { ReviewComponent } from './pages/register/review/review.component';



@NgModule({
  declarations: [

    LoginComponent,
    RegisterComponent,
    QualificationComponent,
    ReviewComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
