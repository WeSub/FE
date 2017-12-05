import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.scss']
})
export class StepsComponent implements OnInit {
  @HostBinding('attr.class') class = 'ui fluid mini vertical steps';
  constructor() { }

  ngOnInit() {
  }

}
