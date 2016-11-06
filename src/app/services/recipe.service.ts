import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';

import { Recipe } from '../data/recipe/recipe.model';

@Injectable()
export class RecipeService {
    private brewdayURL:string = "http://localhost:2437/brewdays";

    constructor(private http: Http) { }

    getRecipeByName(receipeName: string): Observable<any> {
        //return new Observable<Recipe>( new Recipe("a", "OatWhite", [], [], [], [], [], null));
        return null;
    }

    getAllRecipesNames(): Observable<any> {
             
    }
}