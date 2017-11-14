import { Injectable } from '@angular/core';
import { ServiceOffer } from '../classes/service-offer.model';

// list of all offers, provided to each persona based on their criteria
@Injectable()
export class BudgetService {
    studentOffers: ServiceOffer[];
    professionalOffers: ServiceOffer[];
    familyOffers: ServiceOffer[];
    seniorOffers: ServiceOffer[];

    mobileTelenor: ServiceOffer;
    internetTelenor: ServiceOffer;

  constructor() {
      this.mobileTelenor = new ServiceOffer();
      this.mobileTelenor.id = 1;
      this.mobileTelenor.name = 'Telenor';
      this.mobileTelenor.description = 'Telenor Group is a Norwegian mostly government-owned multinational telecommunications company headquartered at Fornebu in Bærum, close to Oslo.';
      this.mobileTelenor.talk = 'Unlimited';
      this.mobileTelenor.data = '10 GB';
      this.mobileTelenor.sms = 'Free';
      this.mobileTelenor.svcUrl = 'https://www.telenor.dk/shop/abonnementer/?icid=icon-navigation-frontpage-link-SubscriptionsOverviewPage';
      this.mobileTelenor.price = 149;
      this.mobileTelenor.period = 'monthly';
      this.mobileTelenor.contract = false;
      this.mobileTelenor.category = 'mobile';

      this.internetTelenor = new ServiceOffer();
      this.internetTelenor.id = 2;
      this.internetTelenor.name = 'Telenor';
      this.internetTelenor.description = 'Telenor Group is a Norwegian mostly government-owned multinational telecommunications company headquartered at Fornebu in Bærum, close to Oslo.';
      this.internetTelenor.speedDown = 18;
      this.internetTelenor.speedUp = 1;
      this.internetTelenor.svcUrl = 'https://www.telenor.dk/shop/bredbaand/';
      this.internetTelenor.price = 219;
      this.internetTelenor.period = 'monthly';
      this.internetTelenor.contract = true;
      this.internetTelenor.terms = 'min. 6 months';
      this.internetTelenor.category = 'internetTelenor';
  }

  // implement sets to allow user to change criteria in the future?

  getStudentOffers(): ServiceOffer[] {
      return this.studentOffers = [this.mobileTelenor, this.internetTelenor];
  }

  getProffesionaOffers(): ServiceOffer[] {
      return this.professionalOffers;
  }

  getFamilyOffers(): ServiceOffer[] {
      return this.familyOffers;
  }

  getSeniorOffers(): ServiceOffer[] {
      return this.seniorOffers;
  }

}
