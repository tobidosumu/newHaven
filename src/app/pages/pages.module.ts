import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../shared/shared.module';
import { PagesRoutingModule } from './pages-routing.module';
import { FormsModule } from '@angular/forms';

import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { DonationComponent } from './donation/donation.component';
import { FaqComponent } from './faq/faq.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { CharitiesComponent } from './home/charities/charities.component';

@NgModule({
  declarations: [
    PagesComponent,
    HomeComponent,
    ProfileComponent,
    DonationComponent,
    FaqComponent,
    UserProfileComponent,
    CharitiesComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class PagesModule { }