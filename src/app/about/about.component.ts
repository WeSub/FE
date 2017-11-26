import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
    <br>
    <br>
    <h2 class="title">About WeSub</h2>
    <p>Some decription about mission, goals, and other stuff.</p>
  `,
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  @HostBinding('attr.class') contClass = 'ui container';

  constructor() { }

  ngOnInit() {
  }

}
