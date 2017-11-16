// This is the service offer model that is used to create an offer object, this may need to be separated at some point to the service types.
export class ServiceOffer {
    //generic
    id: number;
    name: string;
    description: string;
    svcUrl: string;
    price: number;
    period: string;
    contract: boolean;
    terms: string;
    category: string;

    //mobile
    talk: string;
    data: string;
    sms: string;

    //internet
    speedDown: number;
    speedUp: number;

    //streaming
}
