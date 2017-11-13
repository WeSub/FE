import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-contact',
  template: `
    <br>
    <br>
    <h2 class="ui center aligned header">Meet the WeSub Team!</h2>
    <br>
    <br>
    <app-team-roster></app-team-roster>
  `,
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  @HostBinding('attr.class') contClass = 'ui container';

  constructor() { }

  ngOnInit() {
  }

}
