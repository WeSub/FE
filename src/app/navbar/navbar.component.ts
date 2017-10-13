import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `
  <div class="ui big phone stackable fixed main menu" id="navbar">
    <div *ngFor="let item of navlinks" class="nav-item">
        <i class="ui {{ item.icon }} icon"></i>
        <a href="#" class="item.name" >{{ item.name }}</a>
    </div>
    <div class="right menu" id="right-menu">
        <div class="ui transparent icon input" id="searchbar">
            <input type="text" placeholder="Enter Search Here...">
            <i class="search icon"></i>
        </div>
    </div>
    </div>
    <app-steps></app-steps>
  `,
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
    navlinks: Object[];
    selected: any;

  constructor() {
      this.navlinks=[
          {name: 'Home', icon: 'home'},
          {name: 'About WeSub', icon: 'help circle'},
          {name: 'Contact', icon: 'talk'}
      ];
  }

  ngOnInit() {
  }

}
