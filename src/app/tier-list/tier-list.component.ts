import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { SessionPersona } from '../classes/session-persona.model';
import { ServiceOffer } from '../classes/service-offer.model';

@Component({
  selector: 'app-tier-list',
  templateUrl: './tier-list.component.html',
  styleUrls: ['./tier-list.component.scss']
})
export class TierListComponent implements OnInit {
  @Input() sessionPersona: SessionPersona;
  @HostBinding('attr.class') contClass = 'ui fluid container';

  constructor() { }

  ngOnInit() {
  }
}
