import { mongoItem } from '../../mongoItem.model';
import { Ingredient, Hop, Yeast, Grain, MiscIngredient } from './ingredients.model';
import { Rest } from './rest.model';

export class Recipe extends mongoItem {
    constructor(public _id:string, public name: string,
                public yeast: Array<Ingredient<Yeast>>, 
                public hops: Array<[Ingredient<Hop>, number]>, // number of milliseconds from begin of cooking
                public grains: Array<Ingredient<Grain>>,
                public miscIngredients: Array<Ingredient<MiscIngredient>>,
                public rests: Array<Rest>,
                public coldHop: Ingredient<Hop>) {
        super(_id);
    }
}