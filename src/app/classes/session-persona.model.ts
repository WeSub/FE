import { ServiceOffer } from './service-offer.model';

export class SessionPersona {
    name: string;
    tier: string;
    budget: ServiceOffer[];
    comfortable: ServiceOffer[];
    premium: ServiceOffer[];

}
