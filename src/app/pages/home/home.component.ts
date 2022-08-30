import { Component, OnInit, Input } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isDarkTheme: boolean = true;
  query: string;
  charity: any;
  @Input() charities : any;

  showCharity(item: any) {
    this.query = item.title;
    item.highlight = !item.highlight;
  }

  constructor(private scroller: ViewportScroller, private http: HttpClient, private router: Router) {
    this.query = '';  
  }

  ngOnInit(): void {
    this.router.navigate(["/"]);
    this.http.get<Object>('../../../assets/data.json').subscribe(
    data => {
        this.charities = data;
    });
    this.isDarkTheme = localStorage.getItem('theme') === "Dark" ? true : false;
  }

  storeThemeSelection() {
    localStorage.setItem('theme',this.isDarkTheme?"Dark":"Light");
  }

  scrollToCategory() {
    this.scroller.scrollToAnchor("targetCategory");
  }

  scrollTostory() {
    this.scroller.scrollToAnchor("ourstory");
  }

}
