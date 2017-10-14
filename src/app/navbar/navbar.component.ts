import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `
    <div class="ui small phone stackable fixed secondary labeled icon menu" id="navbar">
        <div class="item">
            <img class="ui avatar image" src="../assets/images/avatars/stephen.png">
        </div>
        <div *ngFor="let item of navlinks" class="nav-item">
            <a href="#{{ item.name }}" class="item" >
                <i class="ui {{ item.icon }} icon"></i>
                {{ item.name }}
            </a>
        </div>
        <div class="right menu" id="right-menu">
            <div class="item">
                <app-steps></app-steps>
            </div>
        </div>
    </div>
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
