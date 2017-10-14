import { Component, OnInit, Input, Output } from '@angular/core';
import { Persona } from '../../classes/persona.model';

@Component({
  selector: 'app-tier-list',
  template: `
    <div class="ui list">
        <h3 class="header">Tiers</h3>
        <p>{{ selectedPersona }}</p>
    </div>

  `,
  styleUrls: ['./tier-list.component.scss']
})
export class TierListComponent implements OnInit {
    @Input() selectedPersona: Persona;

  constructor() { }

  ngOnInit() {
  }

}
