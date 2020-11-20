import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { DetailsComponent } from './components/product/details/details.component';

const routes: Routes = [
  { path: "", component: HomeComponent }, // localhost:4200/
  { path: "about", component: AboutComponent }, // localhost:4200/about
  { path: "product/details/:id", component: DetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
