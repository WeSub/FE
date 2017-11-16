// This service gets all offers available and provides it where injected.
// Also provides logic to sort the offers
// Can be converted to database or http requests.
import { Injectable } from '@angular/core';
import { ServiceOffer } from '../classes/service-offer.model';

@Injectable()
export class OffersService {
  private mobileOffers: ServiceOffer[];
  private internetOffers: ServiceOffer[];
  private streamOffers: ServiceOffer[];
  private fitnessOffers: ServiceOffer[]

  lowestMobile: ServiceOffer;
  lowestInternet: ServiceOffer;
  lowestStreaming: ServiceOffer;
  lowestFitness: ServiceOffer;

  constructor() {
      this. mobileOffers = [
          new ServiceOffer(1, 'Telenor', 'desc', 'url', 'mobile', 149, 'monthly', false, 'terms', 'unlimited', '10 GB', 'unlimited'),

          new ServiceOffer(1, 'Telenor2', 'desc', 'url', 'mobile', 199, 'monthly', false, 'terms', 'unlimited', '10 GB', 'unlimited'),
      ]

  }

  // lowest offers
  getlowestMobile(): ServiceOffer {
    this.mobileOffers.sort((a,b) => b.price - a.price).slice();
    console.log(this.mobileOffers);
    this.lowestMobile = this.mobileOffers[0];
    return this.lowestMobile;
  }

  getlowestInternet(): ServiceOffer {
    return this.lowestInternet;
  }

  getlowestStreaming(): ServiceOffer {
    return this.lowestStreaming;
  }

  getlowestFitness(): ServiceOffer {
    return this.lowestFitness;
  }

  // Highest offers
  gethighestMobile(): ServiceOffer {
    return this.lowestMobile;
  }

  gethighestInternet(): ServiceOffer {
    return this.lowestInternet;
  }

  gethighestStreaming(): ServiceOffer {
    return this.lowestStreaming;
  }

  gethighestFitness(): ServiceOffer {
    return this.lowestFitness;
  }
}
