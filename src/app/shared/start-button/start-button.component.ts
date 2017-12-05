import { Component, OnInit, HostBinding, HostListener } from '@angular/core';
import { SessionPersona } from '../../classes/session-persona.model';
import { SessionUserService } from '../../services/session-user.service';

@Component({
  selector: 'app-start-button',
  template: `
    <a [routerLink]="['/home']"><h3 class="ui header" id="start" (click)="startSession()">Get Started!</h3></a>
  `,
  styleUrls: ['./start-button.component.scss']
})
export class StartButtonComponent implements OnInit {
  sessionPersona: SessionPersona;
  @HostBinding('attr.class') contClass = 'ui fluid black button';
  // @HostBinding('style.background-color') buttonColor = '#ff3d00';
  // @HostBinding('style.color') buttonText = '#fff';
  // @HostListener('mouseenter') mouseover() {
  //   this.buttonColor = '#dd2c00';
  // };
  //
  // @HostListener('mouseleave') mouseleave() {
  //   this.buttonColor = '#ff3d00';
  // }
  //
  // @HostListener('click') clickInside() {
  //   this.sessionPersona = this.sessionSvc.getSessionPersona();
  // }

  constructor(private sessionSvc: SessionUserService) { }

  ngOnInit() {
  }

  startSession() {
    this.sessionPersona = this.sessionSvc.getSessionPersona();
  }
}
