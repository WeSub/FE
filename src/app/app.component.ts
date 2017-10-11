import { Component, EventEmitter } from '@angular/core';
import { Persona } from './classes/persona.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  personas: Persona[];

  constructor() {
    this.personas = [
      new Persona(
        1,
        'The Student',
        ['Budget', 'Comfortable', 'Premium'],
        '../assets/images/student.jpg',
        'Just starting out and ready to take on the world!'
      ),
      new Persona(
        2,
        'The Professional',
        ['Budget', 'Comfortable', 'Premium'],
        '../assets/images/professional.jpg',
        'Kicking ass and taking names!'
      ),
      new Persona(
        3,
        'The Family',
        ['Budget', 'Comfortable', 'Premium'],
        '../assets/images/family.jpg',
        'Expanding families and needs.'
      ),
      new Persona(
        4,
        'The Awesome Grandparents',
        ['Budget', 'Comfortable', 'Premium'],
        '../assets/images/grandparents.jpg',
        'The most awesomest grandparents, ever!'
      )
    ]
  }

  personaWasSelected(persona: Persona): void {
    console.log('Persona clicked', persona);
  }
}
