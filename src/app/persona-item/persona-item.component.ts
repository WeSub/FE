import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-persona-item',
  template: `
    <a href=""><h3 class="persona-item">{{ persona }}</h3></a>
  `,
  styleUrls: ['./persona-item.component.scss']
})
export class PersonaItemComponent implements OnInit {
    @Input() persona: string;

  constructor() { }

  ngOnInit() {
  }

}
