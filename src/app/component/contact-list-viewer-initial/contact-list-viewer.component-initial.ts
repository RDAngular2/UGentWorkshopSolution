import {Component, OnInit, EventEmitter, Output, Input} from '@angular/core';
import {Contact} from "../../model/contact";
import {ContactData} from "../../demo-data/contact-data";

@Component({
    moduleId: module.id,
    selector: 'contact-list-viewer-initial',
    templateUrl: 'contact-list-viewer-initial.component.html',
})
export class InitialContactListViewerComponent implements OnInit {

    contacts : Contact[] = [];

    @Input()
    selected : Contact = null;

    constructor() { }

    refresh() {
        this.contacts = ContactData.getInstance().getContacts();
    }

    ngOnInit() {
        this.refresh();
    }

    handleClick(contact:Contact) : void {
        if (contact != this.selected) {
            this.selected = contact;
        } else {
            this.selected = null;
        }
    }

}