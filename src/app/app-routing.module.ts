import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAccountPageComponent } from './create-account-page/create-account-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { QualificationPageComponent } from './qualification-page/qualification-page.component';
import { ReviewPageComponent } from './review-page/review-page.component';
import { WalkInDetailsComponent } from './walk-in-details/walk-in-details.component';
import { WalkInPageComponent } from './walk-in-page/walk-in-page.component';

const routes: Routes = [
  {path : '' , component: LoginPageComponent},
  { path: 'create-page', component: CreateAccountPageComponent },
  {path: 'qualification-page' , component:  QualificationPageComponent},
  {path: 'review-page' , component:  ReviewPageComponent},
  {path: 'walk-in-page' , component:  WalkInPageComponent},
  {path: 'walk-in-details' , component:  WalkInDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
