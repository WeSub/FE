import { Injectable } from '@angular/core';
import { ServiceOffer } from '../classes/service-offer.model';
import { BudgetService } from './budget.service';
import { ComfortableService } from './comfortable.service';
import { PremiumService } from './premium.service';

@Injectable()
export class TierSelectService {
  selectedTier: ServiceOffer[];
  budgetTier: ServiceOffer[];
  comfortableTier: ServiceOffer[];
  premiumTier: ServiceOffer[];

  constructor(
    private bScv: BudgetService,
    private cSvc: ComfortableService,
    private pSvc: PremiumService
  ) {
    // this.budgetTier = this.bScv.getOffers();
    // this.comfortableTier = this.cSvc.getOffers();
    // this.premiumTier = this.pSvc.getOffers();
    // this.selectedTier = this.budgetTier;
  }

  getSelectedTier() {
    return this.selectedTier;
  }

  setSelecteTier(tier: string) {
      console.log('in svc: ' + tier)
    switch (tier) {
      case 'budget':
        this.selectedTier = this.budgetTier;
        break;
      case 'comfortable':
        this.selectedTier = this.comfortableTier;
        break;
      case 'premium':
        this.selectedTier = this.premiumTier;
        break;
      default:
        this.selectedTier = this.budgetTier;
    }
  }

  getBudget() {
    return this.budgetTier;
  }

  getComfortable() {
    return this.comfortableTier;
  }

  getPremium() {
    return this.premiumTier;
  }

}
