import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ContactComponent } from './contact/contact.component';
import { DashboardBeginningComponent } from './dashboard-beginning/dashboard-beginning.component';
import { HomeUserComponent } from './home-user/home-user.component';
import { ImgUserComponent } from './img-user/img-user.component';
import { LenguageComponent } from './lenguage/lenguage.component';
import { LogOutComponent } from './log-out/log-out.component';
import { LoginComponent } from './login/login.component';
import { NewTemplateComponent } from './new-template/new-template.component';
import { PdfUserComponent } from './pdf-user/pdf-user.component';
import { ProfileUserComponent } from './profile-user/profile-user.component';
import { RegisterComponent } from './register/register.component';
import { TemplateUserComponent } from './template-user/template-user.component';
import { UseTemplateComponent } from './use-template/use-template.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';

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
    path:"admin-dashboard",
    component:AdminDashboardComponent
  },
  {
    path:"user-dashboard",
    component:UserDashboardComponent
  },
  {
    path:"home-user",
    component:HomeUserComponent
  },
  {
    path:"pdf-user",
    component:PdfUserComponent
  },
  {
    path:"templates-user",
    component:TemplateUserComponent
  },
  {
    path:"img-user",
    component:ImgUserComponent
  },
  {
    path:"profile-user",
    component:ProfileUserComponent
  },
  {
    path:"new-template",
    component:NewTemplateComponent
  },
  {
    path:"use-template",
    component:UseTemplateComponent
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
