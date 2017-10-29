import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Persona } from '../classes/persona.model';

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
            [persona]="myPersona"
            (click)="clicked(myPersona)"
            [class.selected]="isSelected(myPersona)">
        </app-persona-list-item>
    </div>
  `,
  styleUrls: ['./persona-list.component.scss']
})
export class PersonaListComponent implements OnInit {
  @Input() personasList: Persona[];
  @Input() sessionPersona: Persona;
  @Output() onPersonaSelected: EventEmitter<Persona>;
  private currentPersona: Persona;

  constructor() {
    this.onPersonaSelected = new EventEmitter();
  }

  clicked(persona: Persona): void {
    this.currentPersona = persona;
    this.sessionPersona = persona; // is this necessary if it gets assigned in app.component.ts?
    this.onPersonaSelected.emit(persona);
  }

  isSelected(persona: Persona): boolean {
    if (!persona || !this.currentPersona) {
      return false;
    }
    return persona.id === this.currentPersona.id;
  }

  ngOnInit() {
  }

}
