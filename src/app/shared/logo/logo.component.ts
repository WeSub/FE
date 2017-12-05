import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logo',
  template: `
    <h1 class="logo-text">WeSub.</h1>
  `,
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
