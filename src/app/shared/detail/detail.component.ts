import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail',
  template: `
    <h2 class="detail-text">Welcome to the easiest and fastest way to discover and sign up for your subscriptions services!</h2>
  `,
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
