import { mongoItem } from '../mongoItem.model';

export class Person extends mongoItem {
    constructor(public _id:string, public nickname: string, public address : string) {
        super(_id);
    }
}