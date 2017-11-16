import { Component, EventEmitter, OnInit } from '@angular/core';
import { SessionUserService } from './services/session-user.service';
import { Persona } from './classes/persona.model';
import { SessionPersona } from './classes/session-persona.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  personas: Persona[];
  persona1: Persona;
  persona2: Persona;
  persona3: Persona;
  persona4: Persona;
  sessionPersona: SessionPersona;

  constructor(private sessionSvc: SessionUserService) {

    this.persona1 = new Persona();
    this.persona1.id = 1;
    this.persona1.name = 'Students';
    this.persona1.imageUrl = '../assets/images/student.jpg';
    this.persona1.description = 'Just starting out and ready to take on the world!';
    this.persona1.color = 'red';

    this.persona2 = new Persona();
    this.persona2.id = 2;
    this.persona2.name = 'Professionals';
    this.persona2.imageUrl = '../assets/images/professional.jpg';
    this.persona2.description = 'Kicking ass and taking names!';
    this.persona2.color = 'blue';

    this.persona3 = new Persona();
    this.persona3.id = 3;
    this.persona3.name = 'Families';
    this.persona3.imageUrl = '../assets/images/family.jpg';
    this.persona3.description = 'Expanding families and needs.';
    this.persona3.color = 'green';

    this.persona4 = new Persona();
    this.persona4.id = 4;
    this.persona4.name = 'Awesome Grandparents';
    this.persona4.imageUrl = '../assets/images/grandparents.jpg';
    this.persona4.description = 'The most awesomest grandparents, ever!';
    this.persona4.color = 'purple';
  }

  ngOnInit() {
      this.personas = [
        this.persona1,
        this.persona2,
        this.persona3,
        this.persona4
      ]

      this.sessionPersona = this.sessionSvc.getSessionPersona(); // this creates an empty sessionPersona to store user's selections as an object for later use
      console.log(this.sessionPersona);
  }
}
