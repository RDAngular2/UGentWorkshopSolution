import {Component, OnInit} from '@angular/core';
import {Contact} from "../../../model/contact";
import {ContactService} from "../../../service/contact/contact.service";
import {Router, ActivatedRoute, NavigationEnd} from "@angular/router";
import {ContactHttpService} from "../../../service/contact/contact.http.service";

@Component({
    moduleId: module.id,
    selector: 'contact-list-viewer-with-routing',
    templateUrl: 'contact-list-viewer-with-routing.component.html',
})
export class ContactListViewerWithRoutingComponent implements OnInit {

    private contactId : number = NaN;

    contacts : Contact[] = [];

    constructor(private contactService : ContactService,  private contactHttpService : ContactHttpService, private router: Router, private route : ActivatedRoute) {

    }

    refresh() {
        this.contacts = this.contactService.getContacts();
    }


    ngOnInit() {
        this.refresh();
        this.route.params.subscribe(
          params => this.refresh()
        );
    }



}