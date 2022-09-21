import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardBeginningComponent } from './dashboard-beginning/dashboard-beginning.component';
import { TopBeginningComponent } from './top-beginning/top-beginning.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { ContainerBeginningComponent } from './container-beginning/container-beginning.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { LenguageComponent } from './lenguage/lenguage.component';
import { NavBeginningComponent } from './nav-beginning/nav-beginning.component';
import { TopContactComponent } from './top-contact/top-contact.component';
import { ContainerContactComponent } from './container-contact/container-contact.component';
import { NavContactComponent } from './nav-contact/nav-contact.component';
import { LogOutComponent } from './log-out/log-out.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { TopAdminComponent } from './top-admin/top-admin.component';
import { NavAdminComponent } from './nav-admin/nav-admin.component';
import { ContainerAdminComponent } from './container-admin/container-admin.component';
import { NavUserComponent } from './nav-user/nav-user.component';
import { HomeUserComponent } from './home-user/home-user.component';
import { TemplateUserComponent } from './template-user/template-user.component';
import { ProfileUserComponent } from './profile-user/profile-user.component';
import { PdfUserComponent } from './pdf-user/pdf-user.component';
import { ImgUserComponent } from './img-user/img-user.component';
import { NewTemplateComponent } from './new-template/new-template.component';
import { UseTemplateComponent } from './use-template/use-template.component';

import { AuthInterceptor } from './_security/security-interceptor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    DashboardBeginningComponent,
    TopBeginningComponent,
    FooterComponent,
    ContactComponent,
    ContainerBeginningComponent,
    RegisterComponent,
    LoginComponent,
    LenguageComponent,
    NavBeginningComponent,
    TopContactComponent,
    ContainerContactComponent,
    NavContactComponent,
    LogOutComponent,
    AdminDashboardComponent,
    UserDashboardComponent,
    TopAdminComponent,
    NavAdminComponent,
    ContainerAdminComponent,
    NavUserComponent,
    HomeUserComponent,
    TemplateUserComponent,
    ProfileUserComponent,
    PdfUserComponent,
    ImgUserComponent,
    NewTemplateComponent,
    UseTemplateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
