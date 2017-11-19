import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Persona } from '../../classes/persona.model';
import { SessionUserService } from '../../services/session-user.service';

@Component({
  selector: 'app-persona-list-item',
  template: `
    <div class="column">
        <a (click)="clicked(persona.name)" class="ui medium rounded image" [attr.data-tooltip]="persona.description" data-inverted="" data-position="bottom center">
            <div class="ui ribbon label {{ persona.color }}">{{ persona.name }}</div>
            <img id="persona-image" [src]="persona.imageUrl">
        </a>
    </div>
  `,
  styleUrls: ['./persona-list-item.component.scss']
})
export class PersonaListItemComponent implements OnInit {
  @Input() persona: Persona;
  @HostBinding('attr.class') cssClass = 'four wide column';

  constructor(private sessionSvc: SessionUserService) {
  }

  ngOnInit() {
  }

  clicked(personaName: string) {
    this.sessionSvc.setSessionPersonaName(personaName);
    switch (personaName) {
      case 'Students': this.sessionSvc.setStudentOffers();
        break;
      case 'Professionals': this.sessionSvc.setProfessionalOffers();
        break;
      case 'Families': this.sessionSvc.setFamilyOffers();
        break;
    }
  }

}
