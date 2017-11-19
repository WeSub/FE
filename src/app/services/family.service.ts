// This service gets the offers for a family level persona.
import { Injectable } from '@angular/core';
import { ServiceOffer } from '../classes/service-offer.model';
import { OffersService } from '../services/offers.service';

@Injectable()
export class FamilyService {
  budgetOffers: ServiceOffer[];
  comfortableOffers: ServiceOffer[];
  premiumOffers: ServiceOffer[];

  constructor(private offerSvc: OffersService) { }

  getBudget(): ServiceOffer[] {
      this.budgetOffers = [];
      this.budgetOffers.push(this.offerSvc.getlowestFamilyMobile());
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
      this.premiumOffers.push(this.offerSvc.gethighestFamilyMobile());
      this.premiumOffers.push(this.offerSvc.gethighestStreaming());
      this.premiumOffers.push(this.offerSvc.getlowestFitness());
      this.premiumOffers.push(this.offerSvc.gethighestFitness());
      return this.premiumOffers.slice();
  }

}
