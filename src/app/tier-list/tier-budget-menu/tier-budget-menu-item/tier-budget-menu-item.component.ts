import { Component, OnInit, Input } from '@angular/core';
import { SessionUserService } from '../../../services/session-user.service';


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

  constructor(private sessionSvc: SessionUserService) { }

  ngOnInit() {
  }

  selectTier(tier: string) {
      this.sessionSvc.setSelectedTier(tier);
  }

}
