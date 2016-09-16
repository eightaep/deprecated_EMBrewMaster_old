/**
*      This directive will draw a chart from the array of records provided
*
*           Note : the relevant jsapi scripts should be already available
*                  globally in the window.google object (see index.html)
**/

import {Directive, ElementRef, Input} from "@angular/core";
import {CORE_DIRECTIVES } from "@angular/common";


@Directive({
    selector: "timeline_chart",
})
export class GaugeChartDirective {

    el: HTMLElement;
    w: any;  // To store the window, without generating errors in typescript on window.google
    private _content: any;

    // Setter for content will trigger drawing (or refreshing)
    @Input()
    set content(c: any) {
        console.log("Setting content ...");
        this._content = c;
        this.draw();
    }

    get content() { return this._content; }

    // Constructor inject a ref to the element
    constructor(elementRef: ElementRef) {
        console.log("Constructing chart directive");
        this.w = window;
        this.el = elementRef.nativeElement; // You cannot use elementRef directly !
        if (!this.w.google) { console.error("Hey ! It seems the needed google script was not loaded ?"); };        
    }

    // Do the actual drawing
    draw() {
        console.log("Draw gauge chart");
        // Create the data
        let data = new this.w.google.visualization.arrayToDataTable(this.content.data);
        
        // Create options
        var options: any = this.content.options;

        // Instantiate and draw our chart, passing in some options.
        (new this.w.google.visualization.Timeline(this.el))
            .draw(data, options);
    }
}