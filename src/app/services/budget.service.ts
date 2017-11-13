import { Injectable } from '@angular/core';
import { ServiceOffer } from '../classes/service-offer.model';

@Injectable()
export class BudgetService {
    offers: ServiceOffer[];
    mobileTelenor: ServiceOffer;
    internet: ServiceOffer;

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

      this.internet = new ServiceOffer();
  }

}
