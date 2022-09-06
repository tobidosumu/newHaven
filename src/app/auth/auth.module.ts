import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
<<<<<<< HEAD
=======
import { MaterialModule } from '../material/material.module';

>>>>>>> 728c01c16096e808b6fe629f20ac4b020d224654
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
<<<<<<< HEAD
    ReactiveFormsModule
=======
    MaterialModule,

>>>>>>> 728c01c16096e808b6fe629f20ac4b020d224654
  ]
})
export class AuthModule { }

