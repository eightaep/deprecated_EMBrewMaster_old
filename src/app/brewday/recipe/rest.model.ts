import { mongoItem } from '../../mongoItem.model';

export class Rest extends mongoItem {
    constructor(public _id:string, public name: string,
                public duration_seconds: number, public temperature: number) {
        super(_id);
    }
}
