// This service gets all offers available and provides it where injected.
// Also provides logic to sort the offers
// Can be converted to database or http requests.
import { Injectable } from '@angular/core';
import { ServiceOffer } from '../classes/service-offer.model';

@Injectable()
export class OffersService {
  private mobileOffers: ServiceOffer[];
  private internetOffers: ServiceOffer[];
  private streamOffers: ServiceOffer[];
  private fitnessOffers: ServiceOffer[];

  constructor() {
    this.mobileOffers = [
      new ServiceOffer(1, 'Telenor', 'Fri+', 'https://www.telenor.dk/shop/abonnementer/', 'mobile', 149, 'monthly', false, 'min. 6 months', 'unlimited', '10 GB', 'unlimited'),
      new ServiceOffer(2, 'Telenor', 'Fri+', 'https://www.telenor.dk/shop/abonnementer/', 'mobile', 199, 'monthly', false, 'min. 6 months', 'unlimited', '20 GB', 'unlimited'),
      new ServiceOffer(3, 'Telenor', 'Fri tale', 'https://www.telenor.dk/shop/abonnementer/', 'mobile', 169, 'monthly', false, 'min. 6 months', 'unlimited', '50 GB', 'unlimited'),
      new ServiceOffer(4, 'Telia', '4Everything Premium', 'https://shop.telia.dk/subscription-view.ep?offering=NBMA11.BASIC&valueAddedServices=OSCRLH,OSCHBO', 'mobile', 399, 'monthly', false, 'min. 6 months', 'unlimited', '100 GB', 'unlimited')
    ];

    this.internetOffers = [
      new ServiceOffer(5, 'Telia', '4g Network', 'https://www.telia.dk/privat/abonnementer/bredbaand/#0', 'internet', 249, 'monthly', true, 'min. 6 months', '', '', '', 10, 1),
      new ServiceOffer(6, 'Telenor', 'Telefonstik', 'https://www.telenor.dk/shop/bredbaand/abonnementer/?PreQualificationId=111901094276', 'internet', 169, 'monthly', true, 'min. 6 months', '', '', '', 22, 4),
      new ServiceOffer(7, 'Hiper', 'Telefonstik', 'https://www.hiper.dk/bestil/produkter/ingen-fiber/ingen-kabel-tv/telefonstik?ordre=sYfxqb', 'internet', 199, 'monthly', true, 'min. 6 months', '', '', '', 22, 3.5)
    ];

    this.streamOffers = [
        new ServiceOffer(8, 'Netflix', 'Basis', 'https://www.netflix.com/signup/regform', 'streaming', 79, 'monthly', false, ''),
        new ServiceOffer(8, 'Netflix', 'Premium', 'https://www.netflix.com/signup/regform', 'streaming', 129, 'monthly', false, ''),
        new ServiceOffer(8, 'HBO Nordic', 'Streaming on all devices', 'https://dk.hbonordic.com/registration', 'streaming', 89, 'monthly', false, '')
    ];

    this.fitnessOffers = [
        new ServiceOffer(8, 'Fitness World', '1 Center', 'https://www.fitnessworld.dk/onlinesalg?pid=135&_ga=2.117119937.633312661.1511099001-643498063.1511099001', 'fitness', 159, 'monthly', false, ''),
        new ServiceOffer(8, 'Fitness World', 'All Centers', 'https://www.fitnessworld.dk/onlinesalg?pid=135&_ga=2.117119937.633312661.1511099001-643498063.1511099001', 'fitness', 259, 'monthly', false, ''),
        new ServiceOffer(8, 'Fitness DK', 'Anytime Premium', 'https://www.fitnessdk.dk/signup/center/22/plan/medlemskab-anytime_premium', 'fitness', 499, 'monthly', false, ''),
    ];

    this.sortLowestHighest(this.mobileOffers);
    this.sortLowestHighest(this.internetOffers);
    this.sortLowestHighest(this.streamOffers);
    this.sortLowestHighest(this.fitnessOffers);
  }

  // sorts offer arrays from lowest to highest in price
  sortLowestHighest(offerArray: ServiceOffer[]) {
    offerArray.sort((a, b) => a.price - b.price).slice();
    return offerArray;
  }

  // Lowest offers
  getlowestMobile(): ServiceOffer {
    return this.mobileOffers[0];
  }

  getlowestInternet(): ServiceOffer {
    return this.internetOffers[0];
  }

  getlowestStreaming(): ServiceOffer {
    return this.streamOffers[0];
  }

  getlowestFitness(): ServiceOffer {
    return this.fitnessOffers[0];
  }

  // Highest offers
  gethighestMobile(): ServiceOffer {
    return this.mobileOffers[this.mobileOffers.length - 1];
  }

  gethighestInternet(): ServiceOffer {
    return this.internetOffers[this.internetOffers.length - 1];
  }

  gethighestStreaming(): ServiceOffer {
    return this.streamOffers[this.streamOffers.length - 1];
  }

  gethighestFitness(): ServiceOffer {
    return this.fitnessOffers[this.fitnessOffers.length - 1];
  }

  // Family specific plans or highest amount of database

  // Criteria for Seniors?


}
