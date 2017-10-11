import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Persona } from '../../classes/persona.model';

@Component({
  selector: 'app-persona-list-item',
  template: `
    <div>
        <div class="ui medium rounded image" [attr.data-tooltip]="persona.description" data-inverted="">
            <div class="ui ribbon label {{ persona.color }}">{{ persona.name }}</div>
            <a href="#"><img [src]="persona.imageUrl"></a>
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
