import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatPagesRoutingModule } from './cat-pages-routing.module';
import { CatPagesComponent } from './cat-pages.component';
import { WildlifeComponent } from './wildlife/wildlife.component';


@NgModule({
  declarations: [
    CatPagesComponent,
    WildlifeComponent
  ],
  imports: [
    CommonModule,
    CatPagesRoutingModule
  ]
})
export class CatPagesModule { }
