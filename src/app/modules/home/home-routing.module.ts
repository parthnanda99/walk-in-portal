import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WalkInPageComponent } from './components/walk-in-page/walk-in-page.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent, children : [
    {path: 'walkin-page', component: WalkInPageComponent},
]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
