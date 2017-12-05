import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `
        <div class="item">
            <img class="ui avatar image" src="../assets/images/avatars/stephen.png">
        </div>
        <a *ngFor="let item of navlinks" class="nav-item"
            class="item" [routerLink]="[item.link]"
                            routerLinkActive="active"
                            [routerLinkActiveOptions]="{exact: true}">
            <i class="ui {{ item.icon }} icon"></i>
            {{ item.name }}
        </a>
        <div class="right menu">
        <a class="item">Sign In</a>
        <a class="item">Sign Up</a>
        </div>
  `,
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @HostBinding('attr.class') contClass = 'ui top fixed mini inverted menu';
  @HostBinding('attr.id') id = 'navbar';
  @HostBinding('style.background-color') navbarColor ='#2C9BD2';
  navlinks: Object[];
  selected: any;

  constructor() {
    this.navlinks = [
      { name: 'Home', link: 'home', icon: 'home' },
      { name: 'About WeSub', link: 'about', icon: 'help circle' },
      { name: 'Contact', link: 'contact', icon: 'talk' }
    ];
  }

  ngOnInit() {
  }

}
