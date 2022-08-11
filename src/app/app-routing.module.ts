import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/auth/pages/login/login.component';
import { WalkInDetailsComponent } from './walk-in-details/walk-in-details.component';
import { WalkInPageComponent } from './walk-in-page/walk-in-page.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    redirectTo: '',
    pathMatch: 'full'
  },
  // Fallback when no prior routes is matched
  { path: '**', redirectTo: '/auth/login', pathMatch: 'full' },
  {path: 'walk-in-page' , component:  WalkInPageComponent},
  {path: 'walk-in-details' , component:  WalkInDetailsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
