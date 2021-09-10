import { BusinessComponent } from './business/business.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopheadlineComponent } from './topheadline/topheadline.component';
import { TechComponent } from './tech/tech.component';

const routes: Routes = [
  {path:'', component:TopheadlineComponent}, // top headline & Home
  {path:'tech', component:TechComponent}, // tech
  {path:'buzz', component:BusinessComponent} // business
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
