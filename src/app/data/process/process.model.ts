import { mongoItem } from '../../mongoItem.model';

export class Process extends mongoItem {
    constructor(public _id:string) {
        super(_id);
    }
}