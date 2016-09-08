import { Component } from '@angular/core'

//import {RecipeComponent} from './recipe'

@Component({
    selector: 'brew',
    template: '<h2>Brew</h2><br>{{no}}<br>'
    //directives: [RecipeComponent]
})
export class BrewComponent {
    no: number;
    //receipe: RecipeComponent;
    //process: Process;
}