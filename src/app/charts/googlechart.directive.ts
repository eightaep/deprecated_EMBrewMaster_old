/**
*      This directive will draw a chart from the array of records provided
*
*           Note : the relevant jsapi scripts should be already available
*                  globally in the window.google object (see index.html)
**/

import {Directive, ElementRef, Input, AfterViewInit} from "@angular/core";
import {CORE_DIRECTIVES } from "@angular/common";

@Directive({
    selector: "google_chart",
})
export class GoogleChartDirective implements AfterViewInit {

    el: HTMLElement;
    w: any;  // To store the window, without generating errors in typescript on window.google
    
    @Input() data: any;
    @Input() options: any;
    @Input() charttype: string;

    ngAfterViewInit() {
        this.draw();
    }

    // Constructor inject a ref to the element
    constructor(elementRef: ElementRef) {
        this.w = window;
        this.el = elementRef.nativeElement; 
        if (!this.w.google) { console.error("Hey ! It seems the needed google script was not loaded ?"); };
    }

    // Do the actual drawing
    draw() {
        console.log("Draw chart\ndata: " + this.data + "\noptions: " + this.options);
        // Create the data
        let dataTable = new this.w.google.visualization.arrayToDataTable(this.data);
        
        // Instantiate and draw our chart, passing in some options.
        let chart:any;
        switch(this.charttype) {
            case 'gauge':
                chart = new this.w.google.visualization.Gauge(this.el);
                break;

            case 'timeline':
                chart = new this.w.google.visualization.Timeline(this.el);
                break;
        } 

        chart.draw(dataTable, this.options);
    }
}

/*<div class="container-fluid">
  <div class="panel panel-default">
    <div class="panel-heading">Gauge Chart</div>
    <div class="panel panel-body">
      <google_chart [data]="[['Label', 'Value'],['Memory', 80]]" [options]="{redFrom: 90, redTo: 100, yellowFrom:75, yellowTo: 90,minorTicks: 5}"
        [charttype]="'gauge'"></google_chart>
    </div>
  </div>
</div>


<div class="container-fluid">
  <div class="panel panel-default">
    <div class="panel-heading">Google Charts</div>
    <div class="panel panel-body">
      <google_chart [data]="[['Activity', 'Start Time', 'End Time'], ['Eat Dinner', 5000, 6000], ['Eat Dinner 2nd', 7000, 8000]]"
        [options]="null" [charttype]="'timeline'"></google_chart>
    </div>
  </div>
</div>*/