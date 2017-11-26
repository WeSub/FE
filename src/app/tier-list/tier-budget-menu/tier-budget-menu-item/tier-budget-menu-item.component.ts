import { Component, OnInit, Input, HostBinding, HostListener } from '@angular/core';
import { SessionUserService } from '../../../services/session-user.service';


@Component({
  selector: 'app-tier-budget-menu-item',
  template: `
    <div class="ui raised link card" (click)="setTier(navItem)">
        <div class="content">
            <div class="header">{{ navItem }}</div>
            <div class="description">
                <p>Tier Information Here</p>
            </div>
        </div>
        <div class="extra content">
            <div class="right floated author">
                Summary of list of service categories
            </div>
        </div>
    </div>
    <br>
  `,
  styleUrls: ['./tier-budget-menu-item.component.scss']
})
export class TierBudgetMenuItemComponent implements OnInit {
    @Input() navItem: string;

  constructor(private sessionSvc: SessionUserService) { }

  ngOnInit() {
  }

  setTier(tier: string): void {
      this.sessionSvc.setSelectedTierOffers(this.navItem);
  }

}
