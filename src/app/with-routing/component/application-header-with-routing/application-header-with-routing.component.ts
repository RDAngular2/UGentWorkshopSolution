import {Component, OnInit, Input} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'application-header-with-routing',
    templateUrl: 'application-header-with-routing.component.html'
})
export class ApplicationHeaderWithRoutingComponent {

    @Input()
    applicationName : string = "!!! dummy application name !!!";

    constructor() { }

}