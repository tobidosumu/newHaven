import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  showPassword: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  showHidePassword() {
    this.showPassword = !this.showPassword;
  }
}
