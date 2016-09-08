import { Component } from '@angular/core'
import { Injectable } from '@angular/core';

import { BrewComponent } from './brew'

@Component({
    selector: 'brewday',
    template: '<brew></brew>',
    directives: [BrewComponent]
})
export class BrewdayComponent {
    date: string;
    begin: string;
    attendees: string[];
    brews: BrewComponent[];
}


@Injectable()
export class BrewdayService {
    getBrewdays(): BrewdayComponent[] {
        var bd = new BrewdayComponent();
        bd.attendees = ["Eike", "Micha"];
        bd.begin = Date.now().toLocaleString();
        bd.date = Date.now().toLocaleString();

        var br = new BrewComponent();
        br.no = 1;
        bd.brews = [br];

        return [bd];
    }
}