import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ForgotPwdComponent } from './forgot-pwd/forgot-pwd.component';


@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    SignUpComponent,
    ForgotPwdComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
