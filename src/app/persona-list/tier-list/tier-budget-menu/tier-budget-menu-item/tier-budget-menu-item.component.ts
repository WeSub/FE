import { Component, OnInit, Input } from '@angular/core';
import { TierSelectService } from '../../../../services/tier-select.service';

@Component({
  selector: 'app-tier-budget-menu-item',
  template: `
    <a class="item" (click)="selectTier(navItem)">
        {{ navItem }}
    </a>
  `,
  styleUrls: ['./tier-budget-menu-item.component.scss']
})
export class TierBudgetMenuItemComponent implements OnInit {
    @Input() navItem: string;

  constructor(private tierSvc: TierSelectService) { }

  ngOnInit() {
  }

  selectTier(selection: string) {
    this.tierSvc.setSelecteTier(selection);
  }
}
