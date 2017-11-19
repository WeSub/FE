import { Component, OnInit, HostBinding } from '@angular/core';
import { ServiceOffer } from '../../classes/service-offer.model';
import { SessionUserService } from '../../services/session-user.service';

@Component({
  selector: 'app-tier-offer',
  templateUrl: './tier-offer.component.html',
  styleUrls: ['./tier-offer.component.scss']
})
export class TierOfferComponent implements OnInit {
  @HostBinding('attr.class') contClass = 'ui container';
  offers: ServiceOffer[];

  constructor(private sessionSvc: SessionUserService) { }

  ngOnInit() {
    this.offers = this.sessionSvc.getSelectedTierOffers();
  }

}
