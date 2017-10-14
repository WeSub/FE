import { Component, OnInit, Input, Output, HostBinding } from '@angular/core';
import { Persona } from '../../classes/persona.model';

@Component({
  selector: 'app-tier-list',
  template: `

    <div class="ui list" id="tierlist">
        <h3 class="header">{{ selectedPersona.name }}' Tiers</h3>
        <div class="item" *ngFor="let tier of selectedPersona.tiers">
        {{ tier }}
        </div>

    </div>

  `,
  styleUrls: ['./tier-list.component.scss']
})
export class TierListComponent implements OnInit {
    @Input() selectedPersona: Persona;

  constructor() { }

  ngOnInit() {
      this.selectedPersona.name = 'Unselected must hide';
  }

}
