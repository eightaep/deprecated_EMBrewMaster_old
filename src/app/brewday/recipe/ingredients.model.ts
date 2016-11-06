import { mongoItem } from '../../mongoItem.model';

export class Ingredient<T> {
    constructor(public ingredient: T, public amount: number) {
        
    }
}

abstract class RawMaterial {
    constructor(public name: string) {        
    }

    //abstract toJSON(): string;
}

export class Yeast extends RawMaterial {
    constructor(public name: string) {
        super(name);
    }
}

export class Hop extends RawMaterial {
    constructor(public name: string) {
        super(name);
    }
}

export class Grain extends RawMaterial {
    constructor(public name: string) {
        super(name);
    }
}

export class MiscIngredient extends RawMaterial {
    constructor(public name: string) {
        super(name);
    }
}