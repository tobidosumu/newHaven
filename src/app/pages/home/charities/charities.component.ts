import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-charities',
  templateUrl: './charities.component.html',
  styleUrls: ['./charities.component.scss'],
})
export class CharitiesComponent implements OnInit {
  @Input() charity: any;
  constructor() { }

  isLiked: boolean = !false;

  ngOnInit(): void {
  }

}
