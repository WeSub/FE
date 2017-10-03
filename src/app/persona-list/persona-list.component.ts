import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-persona-list',
  template:`
      <div class="container">
          <ul id="persona-list">
              <li *ngFor="let persona of personas">
                <app-persona-item [persona]="persona"></app-persona-item>
              </li>
          </ul>
      </div>
  `,
  styleUrls: ['./persona-list.component.scss']
})
export class PersonaListComponent implements OnInit {
    personas:string[];
  constructor() {
      this.personas = ['The student', 'Young Pro', 'Family First', 'Awesome Grandparents'];
   }

  ngOnInit() {
  }

}
