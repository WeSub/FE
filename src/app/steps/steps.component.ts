import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.scss']
})
export class StepsComponent implements OnInit {
    @HostBinding('style.position') position = 'fixed';
    @HostBinding('style.right') align = 0;
    @HostBinding('style.z-index') index = 100;
  constructor() { }

  ngOnInit() {
  }

}
