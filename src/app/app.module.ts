import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { ErrorRegistrationFormComponent } from './error-registration-form/error-registration-form.component';
import { UserService } from './services/index';


@NgModule({
  declarations: [
    AppComponent,
    RegistrationFormComponent,
    ErrorRegistrationFormComponent
  ],
  imports: [
   BrowserModule,
   AppRoutingModule,
   ReactiveFormsModule,
   HttpClientModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
