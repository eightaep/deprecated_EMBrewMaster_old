import { mongoItem } from '../mongoItem.model';

export class Brewday extends mongoItem {
    constructor(public _id:string, public date: string) {
        super(_id);
    }
}