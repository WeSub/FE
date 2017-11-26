import { Component, OnInit, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'app-tier-budget-menu',
  template: `
    <app-tier-budget-menu-item *ngFor="let tierName of tiers"
        [navItem]="tierName">
    </app-tier-budget-menu-item>
  `,
  styleUrls: ['./tier-budget-menu.component.scss']
})
export class TierBudgetMenuComponent implements OnInit {
  @HostBinding('attr.class') contClass = 'ui raised cards list';
  tiers: string[];

  constructor() {
      this.tiers = ['Budget', 'Comfortable', 'Premium'];
  }

  ngOnInit() {
  }

}
