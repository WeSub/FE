export class Persona {
  id: number;
  name: string;
  tiers: string[] = ['Budget','Comfortable','Premium'];
  imageUrl: string;
  description: string;
  color: string;
  selectedTier: string;
  selectedServices: string[];
}
