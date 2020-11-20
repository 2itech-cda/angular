import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { DetailsComponent } from './components/product/details/details.component';
import { LoginComponent } from './components/user/login/login.component';
import { RegisterComponent } from './components/user/register/register.component';

const routes: Routes = [
  { path: "", component: HomeComponent },                       // localhost:4200/
  { path: "about", component: AboutComponent },                 // localhost:4200/about
  { path: "product/details/:id", component: DetailsComponent },
  { path: "user", children: [
    { path: "register",  component: RegisterComponent },        // localhost:4200/user/register
    { path: "login", component: LoginComponent },               // localhost:4200/user/login
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
