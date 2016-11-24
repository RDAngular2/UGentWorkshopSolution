import {Component, OnInit, ViewChild} from '@angular/core';
import {Contact} from "../../model/contact";
import {ContactListViewerComponent} from "../contact-list-viewer/contact-list-viewer.component";

@Component({
    moduleId: module.id,
    selector: 'contact-screen',
    templateUrl: 'contact-screen.component.html'
})
export class ContactScreenComponent {

    @ViewChild(ContactListViewerComponent)
    listViewer : ContactListViewerComponent;

    contact : Contact = null;

    constructor() { }

    contactChanged(contact:Contact) {
        this.contact = contact;
    }

    onContactDetailAction(action:string) {
        if (action == 'contactDetailSaved') {
            this.contact = null;
            this.listViewer.refresh();
        } else if (action == 'contactDetailAborted') {
            this.contact = null;
        }
    }

}