import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';

import { Brewday } from './brewday.model';
import { Brew } from './brew.model';

@Injectable()
export class BrewService {
    private brewsURL:string = "http://localhost:2437/brewdays/{:_id}/brews";

    constructor(private http: Http) { }

    getBrewsOfBrewday(brewdayID: string): Observable<any> {
        const brews: Brew[] = [];
        brews.push(new Brew("aaa", "bbb", "ccc"));
        brews.push(new Brew("ddd", "eee", "fff"));
        return new Observable<any>(observer => {
            observer.next(brews);
            observer.complete();
        });
      };

        /*return this.http.get(this.brewsURL.replace("{:_id}", brewdayID))
            .map( (data: Response) => {
                const extracted = data.json();
                const brews: Brew[] = [];
                let brew;
                for (let element of extracted.data) {
                    brew = new Brew(element._id, element.recipeID, element.processID);
                    brews.push(brew);
                }
                return brew;
            });       
    }*/

  /*  getBrewdayByID(brewdayID: string): Observable<any> {
        return this.http.get(this.brewdayURL + "/" + brewdayID)
            .map( (data: Response) => {
                const extracted = data.json();
                let element = extracted.data;
                return new Brewday(element._id, element.date);
            });     
    }

    saveBrewday(bd: Brewday): Observable<any> {
        const body = JSON.stringify(bd);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post(this.brewdayURL, body, {headers: headers})
            .map( (data: Response) => {
                const extracted = data.json();
                console.log("Brewday saved:\n" + extracted + "\n");
                let element = extracted.data;
                return new Brewday(element._id, element.date);;
            });
    }

    deleteBrewday(bd: Brewday): Observable<any> {
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.delete(this.brewdayURL + "/" + bd._id, {headers: headers})
            .map( (data: Response) => {
                const extracted = data.json();
                console.log("Brewday deleted:\n" + extracted + "\n");
                return data.status;
            });
    }*/
}
