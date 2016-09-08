import { Component } from '@angular/core';
import { BrewdayComponent } from './brewday/brewday';
import { BrewdayService } from './brewday/brewday';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [BrewdayComponent],
  providers: [BrewdayService]
})
export class AppComponent {
  title = 'app works fine!';
  brewdays = [];
  
  constructor(private brewdayService: BrewdayService) {
    this.brewdays = brewdayService.getBrewdays();
  }
  

}
