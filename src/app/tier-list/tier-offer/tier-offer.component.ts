import { Component, OnInit } from '@angular/core';
import { ServiceOffer } from '../../classes/service-offer.model';

@Component({
  selector: 'app-tier-offer',
  template: `
    <h3>Your offers:</h3>
    <div *ngFor="let offer of selectedTier">
        {{ offer.name }}
        {{ offer.description }}
        {{ offer.price }}
        {{ offer.period }}
    </div>


  `,
  styleUrls: ['./tier-offer.component.scss']
})
export class TierOfferComponent implements OnInit {
  selectedTier: ServiceOffer[];

  constructor() {

  }

  ngOnInit() {
    
  }

}
