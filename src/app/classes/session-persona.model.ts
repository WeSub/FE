// This is the session user model that is used to build the final configuration of the user's selections
import { ServiceOffer } from './service-offer.model';

export class SessionPersona {
    selectedPersonaName: string;
    selectedTierName: string;
    budget: ServiceOffer[];
    comfortable: ServiceOffer[];
    premium: ServiceOffer[];
    selectedTierOffers: ServiceOffer[];
}
