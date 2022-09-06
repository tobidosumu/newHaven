import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reset-pwd',
  templateUrl: './reset-pwd.component.html',
  styleUrls: ['./reset-pwd.component.scss']
})
export class ResetPwdComponent implements OnInit {
  showPassword: boolean = false;
  shoPassword: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  showHidePassword() {
    this.showPassword = !this.showPassword;
  }
  shoHidePassword() {
    this.shoPassword = !this.shoPassword;
  }
}
