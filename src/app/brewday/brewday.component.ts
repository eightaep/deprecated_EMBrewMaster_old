import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs/Rx';
import { Router, RouterLink, ROUTER_DIRECTIVES } from '@angular/router';

//import { BrewComponent } from './brew'
import { BrewdayService } from './brewday.service';
import { Brewday } from './brewday.model';
import { Brew } from './brew.model';
import { BrewService } from './brew.service';

import { JustGage } from '../lib/JustGage';

@Component({
    selector: 'brewday',
    templateUrl: './app/brewday/brewday.component.html', 
    providers: [BrewdayService, BrewService],
    directives: [ROUTER_DIRECTIVES]
})
export class BrewdayComponent implements OnInit {
    brewday: Brewday;
    date:string;
    brews: Brew[] = [];

    constructor(private brewdayService: BrewdayService, private brewService: BrewService, private router: Router) { }

    ngOnInit() {
        let _id:string;
        
        this.router
            .routerState
            .queryParams
            .subscribe(params => {
                _id = params['_id'];
            });
      
        this.brewdayService.getBrewdayByID(_id)
            .subscribe(
            brewday => this.brewday = brewday,
            error => console.log(error)
            );

        this.brewService.getBrewsOfBrewday(_id)
            .subscribe(
            brews => this.brews = brews,
            error => console.log(error)
            );
        
        var g = new JustGage({
            id: "gauge",
            value: 67,
            min: 0,
            max: 100,
            title: "Visitors"
        });
    }

}
