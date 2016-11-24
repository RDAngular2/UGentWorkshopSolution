import {Component, OnInit} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'name-list-viewer',
    templateUrl: 'name-list-viewer.component.html'
})
export class NameListViewerComponent {

    names : string[] = ["Bart","Karel","Kris","Maggie"];


}