import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon'

@NgModule({
  imports: [
    MatSliderModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatIconModule
  ],
  exports: [
    MatSliderModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatIconModule
  ]
})
export class MaterialModule { }
