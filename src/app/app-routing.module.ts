import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './modules/auth/auth.component';
import { LoginComponent } from './modules/auth/components/login/login.component';
import { MainDetailsComponent } from './modules/auth/components/register/main-details/main-details.component';
import { QualificationComponent } from './modules/auth/components/register/qualification/qualification.component';
import { RegisterComponent } from './modules/auth/components/register/register.component';
import { ReviewComponent } from './modules/auth/components/register/review/review.component';
import { WalkInDetailsComponent } from './modules/home/components/walk-in-details/walk-in-details.component';
import { WalkInPageComponent } from './modules/home/components/walk-in-page/walk-in-page.component';
import { HomeComponent } from './modules/home/home.component';

const routes: Routes = [ 
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    
    path: '' , component: AuthComponent, children:[
      {path: 'login' , component: LoginComponent},
      {path: 'create-account' , component: RegisterComponent , children: [
        {path: 'main-details', component: MainDetailsComponent},
        {path: 'qualification-details', component: QualificationComponent},
        {path: 'review-details', component: ReviewComponent},
      
      ]}
     
    ]
  },
  {path: 'home', component: HomeComponent},
  // {path: 'walkin-details', component: WalkInDetailsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
