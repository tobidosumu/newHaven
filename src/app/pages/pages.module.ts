import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../shared/shared.module';
import { PagesRoutingModule } from './pages-routing.module';

import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { DonationComponent } from './donation/donation.component';
import { CongratsComponent } from './congrats/congrats.component';
import { FaqComponent } from './faq/faq.component';
import { CauseCardComponent } from './home/cause-card/cause-card.component';
import { SignInComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ForgotpwdComponent } from './forgotpwd/forgotpwd.component';
import { NewpwdinputComponent } from './newpwdinput/newpwdinput.component';
import { WildlifeCatComponent } from './wildlife-cat/wildlife-cat.component';



@NgModule({
  declarations: [
    PagesComponent,
    HomeComponent,
    ProfileComponent,
    DonationComponent,
    CongratsComponent,
    FaqComponent,
    CauseCardComponent,
    SignInComponent,
    SignUpComponent,
    ForgotpwdComponent,
    NewpwdinputComponent,
    WildlifeCatComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule
  ]
})
export class PagesModule { }
