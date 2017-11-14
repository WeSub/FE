// This service will take over the event emitting and construction of the sessionPersona. This will remember the changes and selections a user makes and be the final configuration of the persona a user has at the end, which can be used in the future to either save settings or other similar functions.
import { Injectable } from '@angular/core';
import { SessionPersona } from '../classes/session-persona.model';
import { ServiceOffer } from '../classes/service-offer.model';
import { BudgetService } from '../services/budget.service';
import { ComfortableService } from '../services/comfortable.service';
import { PremiumService } from '../services/premium.service';

@Injectable()
export class SessionUserService {
  sessionPersona: SessionPersona;
  offers: ServiceOffer[];

  constructor(private budgetSvc: BudgetService,
    private comfortableSvc: ComfortableService,
    private premiumSvc: PremiumService
  ) {
    this.sessionPersona = new SessionPersona();
  }

  getSessionPersona(): SessionPersona {
    return this.sessionPersona;
  }

  setSessionPersonaName(personaName: string): void {
    this.sessionPersona.name = personaName;
  }

  getSessionPersonaName(): string {
    return this.sessionPersona.name;
  }

  setTier(tierName: string): void {
    this.sessionPersona.tier = tierName;
  }

  getTier(): string {
    return this.sessionPersona.tier;
  }




}
