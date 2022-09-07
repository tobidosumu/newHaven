import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Haven - Charity';
  private isDark = false;

  // @HostBinding('class')
  get themeMode() {
    return this.isDark ? 'theme-dark' : 'theme-light';
  }

  constructor() { }

}
