import {Component, Input} from '@angular/core';
import {Contact} from "../../model/contact";

@Component({
    moduleId: module.id,
    selector: 'contact-viewer',
    templateUrl: 'contact-viewer.component.html',
    styleUrls: ['contact-viewer.component.css']
})
export class ContactViewerComponent {

    @Input()
    contact : Contact;

    constructor() {
        this.contact = new Contact("Donald","Trump",0);
        this.contact.birthYear = 1946;
        this.contact.country = "United States";
        this.contact.phone = "(+1) 212-666-00-666"
        this.contact.proficiency = 0.1;
    }



}