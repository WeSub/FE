// SEC: This is the service offer model that is used to create an offer object, this may need to be separated at some point to the different service types (i.e., mobile, internet, streaming). Otherwise consider the 'decorator' design pattern and change the ServiceOffer[] into just an Object[].
export class ServiceOffer {
  public id: number;
  public name: string;
  public description: string;
  public svcUrl: string;
  public category: string;
  public price: number;
  public period: string;
  public contract: boolean;
  public terms: string;
  public talk: string;
  public data: string;
  public sms: string;
  public family: number;
  public familyInfo: string;
  public speedDown: number;
  public speedUp: number;

  constructor(
    id: number,
    name: string,
    description: string,
    svcUrl: string,
    category: string,
    price: number,
    period: string,
    contract: boolean,
    terms: string,
    talk?: string,
    data?: string,
    sms?: string,
    speedDown?: number,
    speedUp?: number,
    family?: number,
    familyInfo?: string) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.svcUrl = svcUrl;
        this.category = category;
        this.price = price;
        this.period = period;
        this.contract = contract;
        this.terms = terms;
        this.talk = talk || '';
        this.data = data || '';
        this.sms = sms || '';
        this.speedDown = speedDown || 0;
        this.speedUp = speedUp || 0;
        this.family = family;
        this.familyInfo = familyInfo;
    };
}
