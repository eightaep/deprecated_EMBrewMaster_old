import { Component, OnInit, ElementRef, ViewChild, Renderer } from '@angular/core';
//import { HTTP_PROVIDERS } from '@angular/http';

import { BrewdayComponent } from './brewday/brewday.component';
import { BrewdayService } from './brewday/brewday.service';
import { Brewday } from './brewday/brewday.model';
import { NewBrewdayComponent } from './brewday/newbrewday.component';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [BrewdayComponent, NewBrewdayComponent],
  providers: [BrewdayService]
})
export class AppComponent implements OnInit {
  title: string = "EM Brewery Control";
  brewdays: Brewday[];
  newBrewdayExpanded:boolean = true;
  showNewBrewday:boolean;

  constructor(private brewdayService: BrewdayService) {  }

  ngOnInit() {
    this.loadBrewDays();
    this.showNewBrewday = false;
  }

  private loadBrewDays() {
    this.brewdayService.getBrewdaysOverview()
      .subscribe(
      brewdays => this.brewdays = brewdays,
      error => console.error(error)
      );
  }

  onNewBrewday(created: boolean) {
    if(created) {
       this.loadBrewDays(); 
       this.loadBrewDays(); 
    }
    this.showNewBrewday = false;    
  }

  onDeleteBrewday(brewday2delete: Brewday) {
    console.log("Delete " + JSON.stringify(brewday2delete));
    this.brewdayService.deleteBrewday(brewday2delete).subscribe(
      
      error => console.log(error));
    this.loadBrewDays(); 
    this.loadBrewDays();   
  }
}
