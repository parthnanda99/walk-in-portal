import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';
import { AuthRoutingModule } from './modules/auth/auth-routing.module';
import { AuthModule } from './modules/auth/auth.module';
import { NavBarComponent } from './shared/components/nav-bar/nav-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthRoutingModule,
    
  


  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
