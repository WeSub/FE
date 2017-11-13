import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Persona } from '../../classes/persona.model';
import { ServiceOffer } from '../../classes/service-offer.model';

@Component({
  selector: 'app-tier-list',
  template: `
        <h3 class="header">Please select one of the tiers below for {{ selectedPersona.name }}:</h3>
        <div class="ui two column grid">
            <div class="two wide column">
                <app-tier-budget-menu
                    [tiers]="selectedPersona.tiers">
                </app-tier-budget-menu>
            </div>
            <div class="fourteen wide column">
                <app-tier-offer></app-tier-offer>
            </div>
        </div>
  `,
  styleUrls: ['./tier-list.component.scss']
})
export class TierListComponent implements OnInit {
  @Input() selectedPersona: Persona;
  @HostBinding('attr.class') contClass = 'ui container';
  selectedTier: ServiceOffer[];

  constructor() { }

  ngOnInit() { }
}
