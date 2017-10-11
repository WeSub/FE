export class Persona {
    constructor(
        public id: number,
        public name: string,
        public tiers: string[],
        public imageUrl: string,
        public description: string
    ) {
    }
}
