import { Component, OnInit, Input } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isDarkTheme: boolean = true;
  query: string;
  charity: any;
  @Input() charities : any;

  showCharity(item: any) {
    this.query = item.title;
    item.highlight = !item.highlight;
  }

  constructor(private scroller: ViewportScroller, private http: HttpClient, private router: Router) { 
    this.query = 'hi'; 
  }

  ngOnInit(): void {
    this.http.get<Object>('../../../assets/data.json').subscribe(
      data => {
          this.charities = data;
    });
    this.isDarkTheme = localStorage.getItem('theme') === "Dark" ? true : false;
  }

  storeThemeSelection() {
    localStorage.setItem('theme',this.isDarkTheme?"Dark":"Light");
  }

  showCharities(){
    this.scroller.scrollToAnchor("targetCategory");
  }

  scrollToCategory() {
    this.scroller.scrollToAnchor("targetCategory");
  }

  ShowCategoryMenu: boolean = false; // hidden by default
  ShowUserMenu: boolean = false; // hidden by default


  toggleCategoryMenu() {
    this.ShowCategoryMenu = !this.ShowCategoryMenu;
  }

  toggleUserMenu() {
    this.ShowUserMenu = !this.ShowUserMenu;
  }
}
