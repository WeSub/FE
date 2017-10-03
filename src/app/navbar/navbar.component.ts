import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template:`
  <nav class="navbar navbar-toggleable-lg navbar-light">
    <!-- Collapse Toggler -->
    <button type="button" id="toggler" class="navbar-toggler navbar-toggler-right" data-toggle="collapse" data-target="#navbarLinks"     aria-controls="navbarLinks" aria-expanded="false" aria-label="Toggle Navigation">
        <span class="navbar-toggler-icon"></span>
    </button>

    <!-- Brand -->
    <h3 id="navbarTitle"><a href="#/" class="navbar-brand link">WeSub Icon</a></h3>

    <!-- Collapse Target -->
    <div class="collapse navbar-collapse justify-content-end" id="navbarLinks">

      <!-- NavLinks -->
      <ul class="navbar-nav" id="navMenu">
        <li class="nav-item" *ngFor="let navlink of navlinks"><a href="#/" class="nav-link link">{{ navlink }}</a></li>
      </ul>
    </div>
  </nav>
  `,
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {

  constructor() { }
    navlinks: string[];

  ngOnInit() {
      this.navlinks = ['Start Over', 'FAQ', 'Contact'];
  }

}
