import { Component, OnInit, Input } from '@angular/core';

//import { JustGage } from '../lib/justgage.js';

@Component({
    selector: 'my-gauge',
    template: '<div id={{gaugeId}} style="width:200px; height:150px;" ></div>'
})
export class GaugeComponent implements OnInit {

    @Input()
    gaugeId: String;

    ngOnInit() {
        console.log("inside on init with id : " + this.gaugeId);
        /*var g = new JustGage({
            id: this.gaugeId,
            value: 45,
            min: 0,
            max: 100,
            title: "Title"
        });*/
    }
}