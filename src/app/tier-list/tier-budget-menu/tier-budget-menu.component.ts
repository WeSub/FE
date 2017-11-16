import { Component, OnInit, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'app-tier-budget-menu',
  template: `
    <app-tier-budget-menu-item *ngFor="let item of tiers"
        [navItem]="item">
    </app-tier-budget-menu-item>
  `,
  styleUrls: ['./tier-budget-menu.component.scss']
})
export class TierBudgetMenuComponent implements OnInit {
    @Input() tiers: string[];
    @HostBinding('attr.class') contClass = 'ui compact vertical mini labeled icon menu';

  constructor() { }

  ngOnInit() {
  }

}
