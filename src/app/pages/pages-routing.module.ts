import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { DonationComponent } from './donation/donation.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ForgotpwdComponent } from './forgotpwd/forgotpwd.component';
import { CongratsComponent } from './congrats/congrats.component';
import { NewpwdinputComponent } from './newpwdinput/newpwdinput.component';
import { WildlifeCatComponent } from './wildlife-cat/wildlife-cat.component';

const routes: Routes = [
  { path: '', 
    component: PagesComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'donation', component: DonationComponent },
      { path: 'sign-in', component: SignInComponent },
      { path: 'sign-up', component: SignUpComponent },
      { path: 'forgotpwd', component: ForgotpwdComponent },
      { path:  'congrats', component: CongratsComponent },
      { path: 'newpwdinput', component: NewpwdinputComponent},
      { path: 'wildlife-cat', component: WildlifeCatComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
