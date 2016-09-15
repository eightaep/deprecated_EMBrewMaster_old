import { mongoItem } from '../../mongoItem.model';

export class Recipe extends mongoItem {
    constructor(public _id:string, public name: string) {
        super(_id);
    }
}