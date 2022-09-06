import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../shared/shared.module';
import { PagesRoutingModule } from './pages-routing.module';
import { MaterialModule } from '../material/material.module'

import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { DonationComponent } from './donation/donation.component';
import { FaqComponent } from './faq/faq.component';
// import { CauseCardComponent } from './home/cause-card/cause-card.component';
import { CharitiesComponent } from './home/charities/charities.component';
import { UserProfileComponent } from './user-profile/user-profile.component';


@NgModule({
  declarations: [
    PagesComponent,
    HomeComponent,
    ProfileComponent,
    DonationComponent,
    FaqComponent,
    // CauseCardComponent,
    CharitiesComponent,
    UserProfileComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    MaterialModule
  ]
})
export class PagesModule { }