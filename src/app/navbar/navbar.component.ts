import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `
  <div class="ui large phone stackable secondary pointing menu" id="navbar">
      <div class="ui container">
          <a class="item" href="#" *ngFor="let item of navlinks">{{ item }}</a>
          <div class="right menu">
              <div class="ui transparent icon input">
                  <input type="text" placeholder="Enter Search Here...">
                  <i class="search icon"></i>
              </div>
          </div>
      </div>
  </div>
  `,
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
    navlinks: string[];

  constructor() {
      this.navlinks=['Home','About WeSub','Contact'];
  }

  ngOnInit() {
  }

}
