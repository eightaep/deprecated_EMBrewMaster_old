import { Component } from '@angular/core'

import { Brew } from './brew.model';
import { Recipe } from './recipe/recipe.model';
import { Process } from './process/process.model';

@Component({
    selector: 'brew',
    template: '<h2>Brew</h2>{{brew.recipe.name}}'
    //directives: [RecipeComponent]
})
export class BrewComponent {
    brew:Brew;
}