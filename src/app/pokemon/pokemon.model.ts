export enum Type {
    Eau, Feu, Plante, Poison, Normal, Vol, Glace, Electrique, Fee, Ténèbres, Combat, Spectre, Acier, Sol, Psy, Insecte, Dragon, Roche
}

export class Pokemon{

    
    constructor( 
        private specie: string,
        private description: string,
        private types: Array<Type>){
       
    }
    getTypeFromEnum(type: Type) {
        return Type[type];
    }
}