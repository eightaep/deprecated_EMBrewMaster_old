import { Component, OnInit, EventEmitter, Output } from '@angular/core'
import { Observable } from 'rxjs/Rx';
import { FormBuilder, Validators } from '@angular/common';

import { BrewdayService } from './brewday.service';
import { Brewday } from './brewday.model'

@Component({
    selector: 'newbrewday',
    template: `
        <form #myForm="ngForm" (ngSubmit)="onSubmit()" (ngCancel)="onCancel()">
            <input ngControl="date" type="text" placeholder="Date of the Brewday" required [(ngModel)]="newbrewday.date">
            <button type="submit">Create</button>
            <button type="cancel">Cancel</button>
        </form>`,
    providers: [BrewdayService]
})
export class NewBrewdayComponent implements OnInit {
    public newbrewday:Brewday;

    @Output() onCreated = new EventEmitter<boolean>();

    constructor(private brewdayService: BrewdayService) {
    }

    ngOnInit():any {
        this.newbrewday = new Brewday("", "xx.xx.xxxx");
    }

    onSubmit() {
        console.log(this.newbrewday);

        this.brewdayService.saveBrewday(this.newbrewday).subscribe(
            () => console.log("Success"),
            error => console.log(error)
        );

        event.preventDefault();

        this.newbrewday = new Brewday("", "xx.xx.xxxx");
        this.onCreated.emit(true);
    }

    onCancel() {
        this.newbrewday = new Brewday("", "xx.xx.xxxx");
        this.onCreated.emit(false);
    }
}
