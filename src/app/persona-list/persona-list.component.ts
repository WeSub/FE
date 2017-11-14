import { Component, OnInit, Input } from '@angular/core';
import { Persona } from '../classes/persona.model';
import { SessionPersona } from '../classes/session-persona.model';

@Component({
  selector: 'app-persona-list',
  template: `
    <div class="ui center aligned fluid container" id="personas-divider">
        <i class="user circle outline big icon"></i>
        Personas
        <div class="ui horizontal hidden divider"></div>
    </div>
    <div class="ui center aligned four column grid" id="personas-list">
        <app-persona-list-item
            *ngFor="let myPersona of personasList"
            [persona]="myPersona">
        </app-persona-list-item>
    </div>
  `,
  styleUrls: ['./persona-list.component.scss']
})
export class PersonaListComponent implements OnInit {
  @Input() personasList: Persona[];
  @Input() sessionPersona: SessionPersona;

  constructor() { }

  ngOnInit() {
  }

}
