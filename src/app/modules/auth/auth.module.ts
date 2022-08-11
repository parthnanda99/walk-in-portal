import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AuthComponent } from './auth.component';
import { QualificationComponent } from './components/register/qualification/qualification.component';

import { MainDetailsComponent } from './components/register/main-details/main-details.component';
import { ReviewComponent } from './components/register/review/review.component';
import { CreateAccountBarComponent } from 'src/app/shared/components/create-account-bar/create-account-bar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NavBarComponent } from 'src/app/shared/components/nav-bar/nav-bar.component';


@NgModule({
  declarations: [
    LoginComponent,

    RegisterComponent,
    AuthComponent,
    QualificationComponent,
    CreateAccountBarComponent,
NavBarComponent,
    MainDetailsComponent,
     ReviewComponent,

  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule  

    

  ]
})
export class AuthModule { }
