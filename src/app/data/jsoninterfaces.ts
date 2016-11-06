declare module brewery {

    export interface Attendee {
        name: string;
    }

    export interface Grain {
        name: string;
        quantity: number;
    }

    export interface Hop {
        name: string;
        destination: string;
        quantity: number;
    }

    export interface Yeast {
        name: string;
    }

    export interface Rest {
        no: number;
        name: string;
        temperature: number;
        time?: number;
    }

    export interface Ingredient {
        name: string;
        quantity: number;
        time: number;
    }

    export interface Receipe {
        name: string;
        URL: string;
        grains: Grain[];
        hops: Hop[];
        yeasts: Yeast[];
        rests: Rest[];
        ingredients: Ingredient[];
    }

    export interface Heating {
        state: string;
        begin: string;
        end: string;
    }

    export interface Mashing {
        state: string;
    }

    export interface Lautering {
        state: string;
    }

    export interface Boiling {
        state: string;
    }

    export interface Cooling {
        state: string;
    }

    export interface Yeast2 {
        state: string;
    }

    export interface Steps {
        heating: Heating;
        mashing: Mashing;
        lautering: Lautering;
        boiling: Boiling;
        cooling: Cooling;
        yeast: Yeast2;
    }

    export interface Process {
        begin: string;
        end: string;
        steps: Steps;
    }

    export interface Brew {
        receipe: Receipe;
        process: Process;
    }

    export interface RootObject {
        date: string;
        begin: string;
        attendees: Attendee[];
        brews: Brew[];
    }

}

