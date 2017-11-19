// This service gets the offers for a family level persona.
import { Injectable } from '@angular/core';
import { ServiceOffer } from '../classes/service-offer.model';
import { OffersService } from '../services/offers.service';

@Injectable()
export class FamilyService {
  budgetOffers: ServiceOffer[];
  comfortableOffers: ServiceOffer[];
  premiumOffers: ServiceOffer[];

  constructor(private offerSvc: OffersService) {
    this.budgetOffers = [];
    this.comfortableOffers = [];
    this.premiumOffers = [];
  }

  getBudget(): ServiceOffer[] {
      this.budgetOffers.push();
      this.budgetOffers.push();
      return this.budgetOffers;
  }

  getComfortable(): ServiceOffer[] {
      this.comfortableOffers.push();
      this.comfortableOffers.push();
      this.comfortableOffers.push();
      return this.comfortableOffers;
  }

  getPremium(): ServiceOffer[] {
      this.premiumOffers.push();
      this.premiumOffers.push();
      this.premiumOffers.push();
      this.premiumOffers.push();
      return this.premiumOffers;
  }

}
