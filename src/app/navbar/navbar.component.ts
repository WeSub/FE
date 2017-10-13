import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `
  <div class="ui big phone stackable secondary pointing menu" id="navbar">
    <div *ngFor="let item of navlinks">
        <a href="#" class="item" >{{ item }}</a>
    </div>
    <div class="right menu">
        <div class="ui transparent icon input" id="searchbar">
            <input type="text" placeholder="Enter Search Here...">
            <i class="search icon"></i>
        </div>
    </div>
    </div>
  `,
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
    navlinks: string[];
    selected: any;

  constructor() {
      this.navlinks=['Home','About WeSub','Contact'];
  }

  ngOnInit() {
  }

}
