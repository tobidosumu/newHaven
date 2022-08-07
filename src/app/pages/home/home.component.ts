import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { Router } from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private scroller: ViewportScroller, private router: Router) { }

  ngOnInit(): void {
    this.router.navigate(["/"]);
  }

  scrollToCategory() {
    this.scroller.scrollToAnchor("targetCategory");
  }

  scrollTostory() {
    this.scroller.scrollToAnchor("ourstory");
  }

}
