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
        'Students',
        ['Budget', 'Comfortable', 'Premium'],
        '../assets/images/student.jpg',
        'Just starting out and ready to take on the world!',
        'red'
      ),
      new Persona(
        2,
        'Professionals',
        ['Budget', 'Comfortable', 'Premium'],
        '../assets/images/professional.jpg',
        'Kicking ass and taking names!',
        'blue'
      ),
      new Persona(
        3,
        'Families',
        ['Budget', 'Comfortable', 'Premium'],
        '../assets/images/family.jpg',
        'Expanding families and needs.',
        'green'
      ),
      new Persona(
        4,
        'Awesome Grandparents',
        ['Budget', 'Comfortable', 'Premium'],
        '../assets/images/grandparents.jpg',
        'The most awesomest grandparents, ever!',
        'purple'
      )
    ]
  }

  personaWasSelected(persona: Persona): void {
    console.log('Persona clicked', persona);
  }
}
