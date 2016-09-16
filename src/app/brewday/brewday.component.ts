import { Component, OnInit, AfterViewInit } from '@angular/core'
import { Observable } from 'rxjs/Rx';
import { Router, RouterLink, ROUTER_DIRECTIVES } from '@angular/router';

//import { BrewComponent } from './brew'
import { BrewdayService } from './brewday.service';
import { Brewday } from './brewday.model';
import { Brew } from './brew.model';
import { BrewService } from './brew.service';

import { GaugeChartDirective } from "../charts/gaugechart.directive";
import { GoogleChartDirective } from "../charts/googlechart.directive";

//import {CHART_DIRECTIVES} from 'ng2-charts/ng2-charts';

declare var Chart:any;

@Component({
    selector: 'brewday',
    templateUrl: './app/brewday/brewday.component.html', 
    providers: [BrewdayService, BrewService],
    directives: [ROUTER_DIRECTIVES, GaugeChartDirective, GoogleChartDirective],
    styles: [`
        .state {
            height: 30px;
            width:  80px;
            align:  center;
            vertical-align: middle;
            margin-top: 5px;
        }
    `]
})
export class BrewdayComponent implements OnInit, AfterViewInit {
    brewday: Brewday;
    date:string;
    brews: Brew[] = [];
    dashboardvalues = [['Label', 'Value'],['Mesh Ton', 50],['Boil Kettle', 98]];

    constructor(private brewdayService: BrewdayService, private brewService: BrewService, private router: Router) { }

    ngOnInit() {
        let _id:string;
        
        this.router
            .routerState
            .queryParams
            .subscribe(params => {
                _id = params['_id'];
            });
      
        this.brewdayService.getBrewdayByID(_id)
            .subscribe(
            brewday => this.brewday = brewday,
            error => console.log(error)
            );

        this.brewService.getBrewsOfBrewday(_id)
            .subscribe(
            brews => this.brews = brews,
            error => console.log(error)
            );        
    }

    ngAfterViewInit() {
        
        /*var ctx = document.getElementById("myChart");
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
                datasets: [{
                    label: '# of Votes',
                    data: [12, 19, 3, 5, 2, 3],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        });*/
    }

}
