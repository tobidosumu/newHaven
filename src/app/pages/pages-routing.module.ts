import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { DonationComponent } from './donation/donation.component';
import { FaqComponent } from './faq/faq.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'donation', component: DonationComponent },
      { path: 'faq', component: FaqComponent }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
