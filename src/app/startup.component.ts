import { Component, OnInit, ElementRef, ViewChild, Renderer } from '@angular/core';

import { BrewdayService } from './brewday/brewday.service';
import { Brewday } from './brewday/brewday.model';
import { NewBrewdayComponent } from './brewday/newbrewday.component';

@Component({
  templateUrl: './app/startup.component.html',
  directives: [NewBrewdayComponent],
  providers: [BrewdayService]
})
export class StartupComponent implements OnInit {
  title: string = "EM Brewery Control";
  brewdays: Brewday[];
  newBrewdayExpanded:boolean = true;
  showNewBrewday:boolean;
  brewdaysSel:boolean;
  
  constructor(private brewdayService: BrewdayService) {  }

  ngOnInit() {
    this.loadBrewDays();
    this.showNewBrewday = false;
    this.brewdaysSel=true;
  }

  private loadBrewDays() {
    this.brewdayService.getAllBrewdays()
      .subscribe(
      brewdays => this.brewdays = brewdays,
      error => console.log(error)
      );
  }

  onNewBrewday(createdBrewDay: Brewday) {
    if(createdBrewDay != null) {
       this.brewdays.push(createdBrewDay);         
    }
    this.showNewBrewday = false;    
  }

  onDeleteBrewday(brewday2delete: Brewday) {
    console.log("Delete " + JSON.stringify(brewday2delete));
    this.brewdayService.deleteBrewday(brewday2delete).subscribe(
      status => {
        if(status=200) {
          var index = this.brewdays.indexOf(brewday2delete, 0);
          if (index > -1) {
            this.brewdays.splice(index, 1);
          }
        }
      },
      error => console.log(error));   
  }
}
