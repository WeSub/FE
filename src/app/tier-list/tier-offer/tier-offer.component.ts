import { Component, OnInit } from '@angular/core';
import { ServiceOffer } from '../../classes/service-offer.model';
import { SessionUserService } from '../../services/session-user.service';

@Component({
  selector: 'app-tier-offer',
  template: `
    <h3>Your offers:</h3>
    <div *ngFor="let offer of offers">
        {{ offer.name }}
    </div>
  `,
  styleUrls: ['./tier-offer.component.scss']
})
export class TierOfferComponent implements OnInit {
  offers: ServiceOffer[];

  constructor(private sessionSvc: SessionUserService) { }

  ngOnInit() {
      this.offers = this.sessionSvc.getSelectedTierOffers();
  }

}
