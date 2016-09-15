import { mongoItem } from '../mongoItem.model';

import { Recipe } from './recipe/recipe.model';
import { Process } from './process/process.model';

export class Brew extends mongoItem {
    constructor(public _id:string, public recipeID: string, public processID: string) {
        super(_id);
    }
}