import { Component, OnInit, Input, Output } from '@angular/core';
import { Persona } from '../../../classes/persona.model';

@Component({
  selector: 'app-tier-list',
  templateUrl: './tier-list.component.html',
  styleUrls: ['./tier-list.component.scss']
})
export class TierListComponent implements OnInit {
    @Input() persona: Persona;

  constructor() { }

  ngOnInit() {
  }

}
