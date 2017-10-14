export class Persona {
  private _id: number;
  private _name: string;
  private _tiers: string[] = ['Budget','Comfortable','Premium'];
  private _imageUrl: string;
  private _description: string;
  private _color: string;
  private _selectedTier: string;
  private _selectedServices: string[];

  // Getters & Setters

  get id(): number {
    return this._id;
  }

  set id(newID: number) {
    this._id = newID;
  }

  get name(): string {
    return this._name;
  }

  set name(newName: string) {
    this._name = newName;
  }

  get tiers(): string[] {
    return this._tiers;
  }

  set tiers(newTiers: string[]) {
    this._tiers = newTiers;
  }

  get imageUrl(): string {
    return this._imageUrl;
  }

  set imageUrl(newImageUrl: string) {
    this._imageUrl = newImageUrl;
  }

  get description(): string {
    return this._description;
  }

  set description(newDescription: string) {
    this._description = newDescription;
  }

  get color(): string {
    return this._color;
  }

  set color(newColor: string) {
    this._color = newColor;
  }

  get selectedTier(): string {
    return this._selectedTier;
  }

  set selectedTier(newSelectedTier: string) {
    this._selectedTier = newSelectedTier;
  }

  get selectedServices(): string[] {
    return this._selectedServices;
  }

  set selectedServices(newSelectedServices: string[]) {
    this._selectedServices = newSelectedServices;
  }
}
