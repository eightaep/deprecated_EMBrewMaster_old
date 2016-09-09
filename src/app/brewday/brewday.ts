import { Component } from '@angular/core'
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { BrewComponent } from './brew'

@Component({
    selector: 'brewday',
    template: '<brew></brew>',
    directives: [BrewComponent]
})
export class BrewdayComponent {
    id;
    date: string;
    begin: string;
    attendees: string[];
    brews: BrewComponent[];
}


@Injectable()
export class BrewdayService {
    private baseurl:string = "http://localhost:2437/brewdays";

    constructor(private http: Http) { }

    getBrewdays(): Observable<BrewdayComponent[]> {
        let brewDays$ = this.http.get(this.baseurl).map(mapBrewDay);
        return brewDays$;        
    }
}


function mapBrewDay(response:Response): BrewdayComponent[]{
   // The response of the API has a results
   // property with the actual results
   return response.json().results.map(toBrewDay)
}

function toBrewDay(r:any): BrewdayComponent{
  let brewDay = <BrewdayComponent>({
    id: r._id,
    date: r.date,
    begin: r.begin,
    attendees: r.attendees,
    brews: r.brews    
  });
  console.log('Parsed brewday:', brewDay);
  return brewDay;
}