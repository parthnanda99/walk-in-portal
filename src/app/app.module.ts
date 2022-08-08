import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateAccountPageComponent } from './create-account-page/create-account-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { QualificationPageComponent } from './qualification-page/qualification-page.component';
import { ReviewPageComponent } from './review-page/review-page.component';
import { WalkInPageComponent } from './walk-in-page/walk-in-page.component';
import { WalkInDetailsComponent } from './walk-in-details/walk-in-details.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    NavBarComponent,
    CreateAccountPageComponent,
    QualificationPageComponent,
    ReviewPageComponent,
    WalkInPageComponent,
    WalkInDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
