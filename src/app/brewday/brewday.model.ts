import { mongoItem } from '../mongoItem.model';

import { Brew } from './brew.model';

export class Brewday extends mongoItem {
    constructor(public _id:string, public date: string, public brewIDs: string[]) {
        super(_id);
    }
}