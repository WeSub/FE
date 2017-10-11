import { Component, OnInit, Input, Output } from '@angular/core';
import { Persona } from '../../../classes/persona.model';

@Component({
  selector: 'app-tier-list',
  template: `
  <div class="ui vertical list" *ngFor="let tier of tiers">
      <a href="#" class="item">{{ tier }}</a>
  </div>
  `,
  styleUrls: ['./tier-list.component.scss']
})
export class TierListComponent implements OnInit {
    @Input() persona: Persona;

  constructor() { }

  ngOnInit() {
  }

}
