import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';

import { Brewday } from './brewday.model';

@Injectable()
export class BrewdayService {
    private brewdayURL:string = "http://localhost:2437/brewdays";

    constructor(private http: Http) { }

    getBrewdaysOverview(): Observable<any> {
        return this.http.get(this.brewdayURL)
            .map( (data: Response) => {
                const extracted = data.json();
                const brewdays: Brewday[] = [];
                let brewday;
                for (let element of extracted.data) {
                    brewday = new Brewday(element._id, element.date);
                    brewdays.push(brewday);
                }
                return brewdays;
            });        
    }

    saveBrewday(bd: Brewday): Observable<any> {
        const body = JSON.stringify(bd);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post(this.brewdayURL, body, {headers: headers});
    }

    deleteBrewday(bd: Brewday): Observable<any> {
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.delete(this.brewdayURL + "/" + bd._id, {headers: headers});
    }
}
