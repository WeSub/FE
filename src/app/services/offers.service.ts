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
  private fitnessOffers: ServiceOffer[];

  constructor() {
    this.mobileOffers = [
      new ServiceOffer(1, 'Telenor', 'desc', 'url', 'mobile', 149, 'monthly', false, 'terms', 'unlimited', '10 GB', 'unlimited'),
      new ServiceOffer(1, 'Telenor2', 'desc', 'url', 'mobile', 199, 'monthly', false, 'terms', 'unlimited', '10 GB', 'unlimited')
    ];

    this.internetOffers = [

    ];

    this.streamOffers = [

    ];

    this.fitnessOffers = [

    ];

    this.sortLowestHighest(this.mobileOffers);
    this.sortLowestHighest(this.internetOffers);
    this.sortLowestHighest(this.streamOffers);
    this.sortLowestHighest(this.fitnessOffers);
  }

  // sorts offer arrays from lowest to highest in price
  sortLowestHighest(offerArray: ServiceOffer[]) {
    offerArray.sort((a, b) => a.price - b.price).slice();
    return offerArray;
  }

  // Lowest offers
  getlowestMobile(): ServiceOffer {
    return this.mobileOffers[0];
  }

  getlowestInternet(): ServiceOffer {
    return this.internetOffers[0];
  }

  getlowestStreaming(): ServiceOffer {
    return this.streamOffers[0];
  }

  getlowestFitness(): ServiceOffer {
    return this.fitnessOffers[0];
  }

  // Highest offers
  gethighestMobile(): ServiceOffer {
    return this.mobileOffers[this.mobileOffers.length - 1];
  }

  gethighestInternet(): ServiceOffer {
    return this.internetOffers[this.internetOffers.length - 1];
  }

  gethighestStreaming(): ServiceOffer {
    return this.streamOffers[this.streamOffers.length - 1];
  }

  gethighestFitness(): ServiceOffer {
    return this.fitnessOffers[this.fitnessOffers.length - 1];
  }

  
}
