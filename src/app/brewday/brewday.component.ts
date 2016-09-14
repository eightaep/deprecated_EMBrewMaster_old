import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs/Rx';
import { Router } from '@angular/router';

//import { BrewComponent } from './brew'
import { BrewdayService } from './brewday.service';
import { Brewday } from './brewday.model';

@Component({
    selector: 'brewday',
    template: `<h1>Brewday</h1>
    <div *ngIf="brewday">
    <h2>{{brewday._id}}</h2>
    <h2>{{brewday.date}}</h2>
    </div>
    `,
    //templateUrl: './app/brewday/brewday.component.html', 
    providers: [BrewdayService]
})
export class BrewdayComponent implements OnInit {
    brewday: Brewday;
    date:string;

    constructor(private brewdayService: BrewdayService, private router: Router) { }

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
    }

}
