import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  ShowCatgoryMenu: boolean = false; // hidden by default
  ShowUserMenu: boolean = false; // hidden by default


  toggleCategoryMenu() {
  
  this.ShowCatgoryMenu = ! this.ShowCatgoryMenu;
  
  }

  toggleUserMenu() {
  
    this.ShowUserMenu = ! this.ShowUserMenu;
    
    }

}
