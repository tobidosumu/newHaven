import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';

import { AuthRoutingModule } from './auth-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ForgotPwdComponent } from './forgot-pwd/forgot-pwd.component';
import { CongratsComponent } from './congrats/congrats.component';
import { ResetPwdComponent } from './reset-pwd/reset-pwd.component';


@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    SignUpComponent,
    ForgotPwdComponent,
    CongratsComponent,
    ResetPwdComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MaterialModule,

  ]
})
export class AuthModule { }

