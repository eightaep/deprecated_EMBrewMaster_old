import { Component } from '@angular/core'
import { Observable } from 'rxjs/Rx';

//import { BrewComponent } from './brew'
import { BrewdayService } from './brewday.service';

@Component({
    selector: 'brewday',
    templateUrl: './app/brewday/brewday.component.html'
})
export class BrewdayComponent {
    brewdays: any[];

    constructor(/*private brewdayService: BrewdayService*/) {
        //this.brewdays = brewdayService.getBrewdays();

    }

    //begin: string;
    //attendees: string[];
    //brews: BrewComponent[];
}
