// This service gets the offers for a student level persona - lowest.
import { Injectable } from '@angular/core';
import { ServiceOffer } from '../classes/service-offer.model';
import { OffersService } from '../services/offers.service';

@Injectable()
export class StudentService {
    mobileOffer: ServiceOffer;
    internetOffer: ServiceOffer;
    streamingOffer: ServiceOffer;
    fitnessOffer: ServiceOffer;
    offers: ServiceOffer[];

  constructor(private offerSvc: OffersService) {
      this.mobileOffer = this.offerSvc.getlowestMobile();
      this.internetOffer = this.offerSvc.getlowestInternet();
      this.streamingOffer = this.offerSvc.getlowestStreaming();
      this.fitnessOffer = this.offerSvc.getlowestFitness();
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
