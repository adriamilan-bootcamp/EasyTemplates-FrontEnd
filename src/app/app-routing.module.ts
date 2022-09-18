import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { DashboardBeginningComponent } from './dashboard-beginning/dashboard-beginning.component';
import { LenguageComponent } from './lenguage/lenguage.component';
import { LogOutComponent } from './log-out/log-out.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: "contact",
    component: ContactComponent
  },
  {
    path: "home",
    component: DashboardBeginningComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "register",
    component: RegisterComponent
  },
  {
    path:"logOut",
    component:LogOutComponent
  },
  {
    path: "lenguatge",
    component: LenguageComponent
  },
  {
    path: '', redirectTo: 'home', pathMatch: 'full',
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
