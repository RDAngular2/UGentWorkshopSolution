import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'application-header',
    templateUrl: 'application-header.html'
})
export class ApplicationHeaderComponent implements OnInit {

    @Input()
    applicationName : string = "!!! dummy application name !!!";

    @Output()
    onSearch : EventEmitter<string> = new EventEmitter<string>();

    constructor() { }

    search(searchString:string) {
        console.log("Search button clicked");
        this.onSearch.next(searchString);
    }

    ngOnInit() {
        console.log("Application Header initialized.");
    }

}