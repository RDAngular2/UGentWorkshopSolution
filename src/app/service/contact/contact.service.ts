import {Injectable} from '@angular/core';
import {Contact} from "../../model/contact";
import {ContactData} from "../../demo-data/contact-data";

@Injectable()
export class ContactService {

    constructor() { }

    getContacts() : Contact[] {
        return ContactData.getInstance().getContacts();
    }

    saveContact(contact:Contact) : void {
        ContactData.getInstance().saveContact(contact.copy());
    }

    getContact(id:number) : Contact {
        return ContactData.getInstance().getContact(id) ;
    }

}