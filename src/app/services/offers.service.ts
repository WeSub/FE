// This service gets all offers available and provides it where injected.
// Also provides logic to sort the offers
// Can be converted to database or http requests.
import { Injectable } from '@angular/core';
import { ServiceOffer } from '../classes/service-offer.model';

@Injectable()
export class OffersService {
  mobileOffers: ServiceOffer[];
  internetOffers: ServiceOffer[];
  streamOffers: ServiceOffer[];
  fitnessOffers: ServiceOffer[]

  lowestMobile: ServiceOffer;
  lowestInternet: ServiceOffer;
  lowestStreaming: ServiceOffer;
  lowestFitness: ServiceOffer;

  constructor() {
      // instantiate fake offers



  }

  // lowest offers
  getlowestMobile(): ServiceOffer {
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
