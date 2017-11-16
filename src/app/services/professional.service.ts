// This service gets the offers for a pro level persona - highest.
import { Injectable } from '@angular/core';
import { ServiceOffer } from '../classes/service-offer.model';
import { OffersService } from '../services/offers.service';

@Injectable()
export class ProfessionalService {
    mobileOffer: ServiceOffer;
    internetOffer: ServiceOffer;
    streamingOffer: ServiceOffer;
    fitnessOffer: ServiceOffer;
    offers: ServiceOffer[];

  constructor(private offerSvc: OffersService) {
      this.mobileOffer = this.offerSvc.gethighestMobile();
      this.internetOffer = this.offerSvc.gethighestInternet();
      this.streamingOffer = this.offerSvc.gethighestStreaming();
      this.fitnessOffer = this.offerSvc.gethighestFitness();
  }

  // Needs to be optimised, do I really need to return all these times?
    getBudget(): ServiceOffer[] {
        this.offers.push(this.mobileOffer);
        this.offers.push(this.internetOffer);
        return this.offers;
    }

    getComfortable(): ServiceOffer[] {
        this.getBudget();
        this.offers.push(this.streamingOffer);
        return this.offers;
    }

    getPremium(): ServiceOffer[] {
        this.getComfortable();
        this.offers.push(this.fitnessOffer);
        return this.offers;
    }


}
