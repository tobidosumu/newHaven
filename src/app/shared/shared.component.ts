import { Component, OnInit } from '@angular/core';
import { DarkModeService } from 'angular-dark-mode';


@Component({
  selector: 'app-shared',
  template: `<router-outlet></router-outlet>`
})
export class SharedComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
