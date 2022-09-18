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
import { AuthInterceptor } from './_security/security-interceptor';

import { HTTP_INTERCEPTORS } from '@angular/common/http';

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
    LogOutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
