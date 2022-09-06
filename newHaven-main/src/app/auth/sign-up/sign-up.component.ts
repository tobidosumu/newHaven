import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  shoPassword: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  shoHidePassword() {
    this.shoPassword = !this.shoPassword;
  }

}
