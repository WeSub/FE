// This service gets the offers for a student level persona - lowest.
import { Injectable } from '@angular/core';
import { ServiceOffer } from '../classes/service-offer.model';
import { OffersService } from '../services/offers.service';

@Injectable()
export class StudentService {
  budgetOffers: ServiceOffer[];
  comfortableOffers: ServiceOffer[] = [];
  premiumOffers: ServiceOffer[] = [];

  constructor(private offerSvc: OffersService) {
  }

  getBudget(): ServiceOffer[] {
    this.budgetOffers = [];
    this.budgetOffers.push(this.offerSvc.getlowestMobile());
    this.budgetOffers.push(this.offerSvc.getlowestInternet());
    return this.budgetOffers.slice();
  }

  getComfortable(): ServiceOffer[] {
    this.comfortableOffers = [];
    this.comfortableOffers.push(this.budgetOffers[0]);
    this.comfortableOffers.push(this.budgetOffers[1]);
    this.comfortableOffers.push(this.offerSvc.getlowestStreaming());
    return this.comfortableOffers.slice();
  }

  getPremium(): ServiceOffer[] {
    this.premiumOffers = [];
    this.premiumOffers.push(this.comfortableOffers[0]);
    this.premiumOffers.push(this.comfortableOffers[1]);
    this.premiumOffers.push(this.comfortableOffers[2]);
    this.premiumOffers.push(this.offerSvc.getlowestFitness());
    return this.premiumOffers.slice();
  }

}
