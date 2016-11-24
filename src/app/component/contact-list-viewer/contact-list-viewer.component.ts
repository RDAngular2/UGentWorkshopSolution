import {Component, OnInit, EventEmitter, Output, Input} from '@angular/core';
import {Contact} from "../../model/contact";
import {ContactData} from "../../demo-data/contact-data";
import {ContactService} from "../../service/contact/contact.service";

@Component({
    moduleId: module.id,
    selector: 'contact-list-viewer',
    templateUrl: 'contact-list-viewer.component.html',
})
export class ContactListViewerComponent implements OnInit {

    contacts : Contact[] = [];

    @Input()
    selected : Contact = null;

    @Output()
    contactChange : EventEmitter<Contact> = new EventEmitter<Contact>();

    constructor(private contactService : ContactService) {

    }

    refresh() {
        this.contacts = this.contactService.getContacts();
    }

    ngOnInit() {
        this.refresh();
    }

    handleClick(contact:Contact) : void {
        let selection : Contact = null;
        if (contact != this.selected) {
            selection = contact;
        }
        this.contactChange.next(selection);
    }

}