import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
<<<<<<< HEAD
// import { ReactiveFormsModule } from '@angular/forms';
=======
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module'
>>>>>>> 728c01c16096e808b6fe629f20ac4b020d224654

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
<<<<<<< HEAD
    // ReactiveFormsModule
=======
    HttpClientModule,
    MaterialModule
>>>>>>> 728c01c16096e808b6fe629f20ac4b020d224654

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }