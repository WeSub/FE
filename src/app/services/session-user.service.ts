// This is a service that creates one session user object. This will store the changes and selections a user makes and build into the final configuration of the persona a user has at the end, which can be used in the future to either save settings or other similar functions. This will also use different services to configure the tiers based on the persona that is selected.
import { Injectable, EventEmitter } from '@angular/core';
import { SessionPersona } from '../classes/session-persona.model';
import { ServiceOffer } from '../classes/service-offer.model';
import { StudentService } from '../services/student.service';
import { ProfessionalService } from '../services/professional.service';
import { FamilyService } from '../services/family.service';
import { SeniorService } from '../services/senior.service';

@Injectable()
export class SessionUserService {
  sessionPersona: SessionPersona;
  offers: ServiceOffer[];
  offersChanged = new EventEmitter<ServiceOffer[]>();
  budgetChanged = new EventEmitter<ServiceOffer[]>();
  comfortableChanged = new EventEmitter<ServiceOffer[]>();
  premiumChanged = new EventEmitter<ServiceOffer[]>();

  // create and return the sessionPersona app-wide
  constructor(private studentSvc: StudentService,
    private proSvc: ProfessionalService,
    private famSvc: FamilyService,
    private seniorSvc: SeniorService
  ) {
    this.sessionPersona = new SessionPersona();
    this.sessionPersona.budget = [];
    this.sessionPersona.comfortable = [];
    this.sessionPersona.premium = [];
  }

  getSessionPersona(): SessionPersona {
    return this.sessionPersona;
  }

  // set and return the sessionPersona type via string student, pro, fam, senior
  setSessionPersonaName(personaName: string): void {
    this.sessionPersona.selectedPersonaName = personaName;
  }

  getSessionPersonaName(): string {
    return this.sessionPersona.selectedPersonaName;
  }

  // set and return the selectedTier to show the right offers
  setSelectedTierName(tierName: string): void {
    this.sessionPersona.selectedTierName = tierName;
    this.setSelectedTierOffers(tierName);
  }

  getSelectedTierName(): string {
    return this.sessionPersona.selectedTierName;
  }

  // call the selected persona svc and get the offers
  setStudentOffers() {
    this.sessionPersona.budget = this.studentSvc.getBudget();
    this.sessionPersona.comfortable = this.studentSvc.getComfortable();
    this.sessionPersona.premium = this.studentSvc.getPremium();
    this.setSelectedTierOffers(this.sessionPersona.selectedTierName);
  }

  setProfessionalOffers() {
    this.sessionPersona.budget = this.proSvc.getBudget();
    this.sessionPersona.comfortable = this.proSvc.getComfortable();
    this.sessionPersona.premium = this.proSvc.getPremium();
    this.setSelectedTierOffers(this.sessionPersona.selectedTierName);
  }

  setFamilyOffers() {
    this.sessionPersona.budget = this.famSvc.getBudget();
    this.sessionPersona.comfortable = this.famSvc.getComfortable();
    this.sessionPersona.premium = this.famSvc.getPremium();
    this.setSelectedTierOffers(this.sessionPersona.selectedTierName);
  }

  setSeniorOffers() {
    this.sessionPersona.budget = this.seniorSvc.getBudget();
    this.sessionPersona.comfortable = this.seniorSvc.getComfortable();
    this.sessionPersona.premium = this.seniorSvc.getPremium();
    this.budgetChanged.emit(this.sessionPersona.budget);
    this.comfortableChanged.emit(this.sessionPersona.budget);
    this.premiumChanged.emit(this.sessionPersona.budget);
  }

  // set and return the selected tier OffersService
  setSelectedTierOffers(selectedTierName: string): void {
    this.sessionPersona.selectedTierName = selectedTierName;
    switch (selectedTierName) {
      case 'Budget':
        this.sessionPersona.selectedTierOffers = this.sessionPersona.budget;
        break;
      case 'Comfortable': this.sessionPersona.selectedTierOffers = this.sessionPersona.comfortable;
        break;
      case 'Premium': this.sessionPersona.selectedTierOffers = this.sessionPersona.premium;
        break;
    };
    this.offersChanged.emit(this.sessionPersona.selectedTierOffers);
  }

  getSelectedTierOffers(): ServiceOffer[] {
    return this.sessionPersona.selectedTierOffers;
  }
}
