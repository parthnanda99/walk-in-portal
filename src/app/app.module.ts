import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './modules/auth/auth.module';
import { CreateAccountBarComponent } from './shared/components/create-account-bar/create-account-bar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeModule } from './modules/home/home.module';

@NgModule({
  declarations: [
    AppComponent,

   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   ReactiveFormsModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
