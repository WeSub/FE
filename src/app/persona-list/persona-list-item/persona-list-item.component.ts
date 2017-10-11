import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Persona } from '../../classes/persona.model';

@Component({
  selector: 'app-persona-list-item',
  template: `
    <div class="four wide column">
        <div class="ui medium image" [attr.data-tooltip]="persona.description" data-inverted="">
            <div class="ui red ribbon label">{{ persona.name }}</div>
            <img [src]="persona.imageUrl">
        </div>
    </div>
  `,
  styleUrls: ['./persona-list-item.component.scss']
})
export class PersonaListItemComponent implements OnInit {
    @Input() persona: Persona;
    @HostBinding('attr.class') cssClass = 'four wide column';
  constructor() { }

  ngOnInit() {
  }

}
