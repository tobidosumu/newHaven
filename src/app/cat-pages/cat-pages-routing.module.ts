import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatPagesComponent } from './cat-pages.component';

import { WildlifeComponent } from './wildlife/wildlife.component';

const routes: Routes = [
  {
    path: '',
    component: CatPagesComponent,
    children: [
      { path: 'wildlife', component: WildlifeComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatPagesRoutingModule { }
