import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { Router } from '@angular/router'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(private scroller: ViewportScroller, private router: Router) { }

  ngOnInit(): void {
    this.router.navigate(["/"]);
  }

  scrollToHeader() {
    this.scroller.scrollToAnchor("targetHeader");
  }

}
