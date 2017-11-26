import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-contact',
  template: `
    <br>
    <br>
    <h1 class="title">Meet the WeSub Team!</h1>
    <br>
    <br>
    <div class="ui raised segment">
        <br>
        <br>
        <div class="ui two column grid">
            <div class="four wide column"></div>
            <div class="twelve wide column">
                <app-team-roster></app-team-roster>
            </div>
        </div>
        <br>
        <br>
    </div>
  `,
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  @HostBinding('attr.class') contClass = 'ui container';

  constructor() { }

  ngOnInit() {
  }

}
