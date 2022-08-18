import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { Router } from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private scroller: ViewportScroller, private router: Router) {
    // this.toggleHeart = true;
  }

  // toggleHeart() {
  //   return this.toggleHeart;
  // }

  ngOnInit(): void {
    this.router.navigate(["/"]);
  }

  scrollToCategory() {
    this.scroller.scrollToAnchor("targetCategory");
  }

  scrollTostory() {
    this.scroller.scrollToAnchor("ourstory");
  }

  charities = [
    {
    title:"Help the children of Ukraine",
    detail: "We explain what's at stake, what lies behind Russia's thinking and what might happen...",
    img:"assets/img/african_boy.png",
    alt:"how your donations used in Ukraine"
    },
    {
      title:"Help the children of Ukraine",
      detail: "We explain what's at stake, what lies behind Russia's thinking and what might happen...",
      img:"assets/img/african_boy.png",
      alt:"how your donations used in Ukraine"
    },
    {
      title:"Help the children of Ukraine",
      detail: "We explain what's at stake, what lies behind Russia's thinking and what might happen...",
      img:"assets/img/african_boy.png",
      alt:"how your donations used in Ukraine"
    },
    {
      title:"Help the children of Ukraine",
      detail: "We explain what's at stake, what lies behind Russia's thinking and what might happen...",
      img:"assets/img/african_boy.png",
      alt:"how your donations used in Ukraine"
    }
  ]
}
