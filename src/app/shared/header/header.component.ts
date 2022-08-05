import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { Router } from '@angular/router'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private scroller: ViewportScroller, private router: Router) { }

  ngOnInit(): void {
    this.router.navigate(["/"]);
  }

  scrollToCategory() {
    this.scroller.scrollToAnchor("targetCategory");
  }

  ShowCatgoryMenu: boolean = false; // hidden by default
  ShowUserMenu: boolean = false; // hidden by default


  toggleCategoryMenu() {
    this.ShowCatgoryMenu = !this.ShowCatgoryMenu;
  }

  toggleUserMenu() {
    this.ShowUserMenu = !this.ShowUserMenu;
  }
}
