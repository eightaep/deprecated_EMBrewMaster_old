import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';

import { Person } from './person.model';

@Injectable()
export class PersonService {
    private personsURL:string = "http://localhost:2437/persons";

    constructor(private http: Http) { }

    getAllPersons(): Observable<any> {
        return this.http.get(this.personsURL)
            .map( (data: Response) => {
                const extracted = data.json();
                const persons: Person[] = [];
                let person;
                for (let element of extracted.data) {
                    person = new Person(element._id, element.nickname, element.address);
                    persons.push(person);
                }
                return persons;
            });        
    }

    getPersonByID(personID: string): Observable<any> {
        return this.http.get(this.personsURL + "/" + personID)
            .map( (data: Response) => {
                const extracted = data.json();
                let element = extracted.data;
                return new Person(element._id, element.nickname, element.address);
            });     
    }

    saveBrewday(bd: Person): Observable<any> {
        const body = JSON.stringify(bd);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post(this.personsURL, body, {headers: headers})
            .map( (data: Response) => {
                const extracted = data.json();
                console.log("Person saved:\n" + extracted + "\n");
                let element = extracted.data;
                return new Person(element._id, element.nickname, element.address);
            });
    }

    deleteBrewday(p: Person): Observable<any> {
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.delete(this.personsURL + "/" + p._id, {headers: headers})
            .map( (data: Response) => {
                const extracted = data.json();
                console.log("Person deleted:\n" + extracted + "\n");
                return data.status;
            });
    }
}
