import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component'
import { SharedComponent } from './shared.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  {
    path: 'shared',
    component: SharedComponent,
    children: [
     { path: 'header', component: HeaderComponent },
     { path: 'footer', component: FooterComponent },
     { path: 'navbar', component: NavbarComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
