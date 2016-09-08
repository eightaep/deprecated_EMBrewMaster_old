import { Component } from '@angular/core'

@Component({
    selector: 'recipe',
    template: 
      `<h3>Recipe</h3>
      {{name}}
      <table border="1">
        <tr *ngFor="#grain of grains"><td>{{grain.name}}</td><td>{{grain.amount}}</td></tr>
      </table>
      `
})
export class RecipeComponent {
    name = "Oat White IPA";
    grains = [{ "name": "Weizenmalz", "amount": "1960g"}, 
              { "name": "Pilsnermalz", "amount": "1960g"},
              { "name": "Hafermalz", "amount": "780"},
              { "name": "Sauermalz", "amount": "78"}];
}