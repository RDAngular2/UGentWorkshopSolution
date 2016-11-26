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

        /*
        *   The code changes if you use the more realistic contactHttpService because you get an Observable<Contact>
        *
        *   this.contactHttpService.getContacts().subscribe(
        *       result => this.contacts = result
        *   )
        *
        *   At the moment, you will probably not be able to appreciate the power of observables (over promises), except that you have the option to cancel an observable! (=request in this case).
        *
        *   They become powerful when you start to combine different observables. In real life you will even come across observables that emit observables and you get into
        *   the exciting world of flatMap / mergeMap and marble diagrams.
        **/


    }


    ngOnInit() {
        this.refresh();
        this.route.params.subscribe(
          params => this.refresh()
        );
    }



}