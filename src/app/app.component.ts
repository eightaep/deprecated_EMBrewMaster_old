import { Component } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';

import { BrewdayComponent } from './brewday/brewday';
import { BrewdayService } from './brewday/brewday';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [BrewdayComponent],
  providers: [BrewdayService, HTTP_PROVIDERS]
})
export class AppComponent {
  title = 'app works fine!';
  brewdays: BrewdayComponent[] = [];
  errorMessage: string = '';

  constructor(private brewdayService: BrewdayService) {
    
  }
  
  ngOnInit(){
    this.brewdayService.getBrewdays()
      .subscribe(
         /* happy path */ bds => this.brewdays = bds,
         /* error path */ e => this.errorMessage = e);

    console.log(this.brewdays);
  }

}
