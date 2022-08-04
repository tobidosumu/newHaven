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
    scrollTo(element: any): void {
      (document.getElementById(element) as HTMLElement).scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    }

}
