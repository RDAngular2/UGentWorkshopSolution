import {Component, OnInit, Input} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'application-header-initial',
    templateUrl: 'application-header-initial.component.html'
})
export class InitialApplicationHeaderComponent implements OnInit {

    /* If you want that other components be able to set this property, you need to add it to the public api by using the Input annotation*/
    @Input()
    applicationName : string = "!!! dummy application name !!!";

    constructor() { }

    search() {
        console.log("Search button clicked.");
        alert("Search is not implemented yet.");
    }

    ngOnInit() {
        console.log("Application Header initialized.");
    }

}