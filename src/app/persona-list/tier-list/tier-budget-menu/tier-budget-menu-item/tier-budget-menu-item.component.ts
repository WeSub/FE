import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tier-budget-menu-item',
  template: `
    <a class="item">
        {{ navItem }}
    </a>
  `,
  styleUrls: ['./tier-budget-menu-item.component.scss']
})
export class TierBudgetMenuItemComponent implements OnInit {
    @Input() navItem: string;

  constructor() { }

  ngOnInit() {
  }

}
