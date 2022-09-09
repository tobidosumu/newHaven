import { Component, OnInit, Input } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { DarkModeService } from 'angular-dark-mode';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
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
    })
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
