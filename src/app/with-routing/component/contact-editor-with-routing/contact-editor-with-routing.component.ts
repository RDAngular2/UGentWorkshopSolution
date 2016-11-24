import {Component, Input, ViewChild, OnInit, Output, EventEmitter} from '@angular/core';
import {Contact} from "../../../model/contact";
import {ContactData} from "../../../demo-data/contact-data";
import {NgForm} from "@angular/forms";
import {ContactService} from "../../../service/contact/contact.service";
import {ToastrService} from "toastr-ng2";
import {ActivatedRoute, ActivatedRouteSnapshot, Router} from "@angular/router";
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';
import {Observable} from "rxjs";
import {ConfirmationDialogService} from "../confirmation-dialog/confirmation-dialog.service";
import {ContactHttpService} from "../../../service/contact/contact.http.service";

@Component({
    moduleId: module.id,
    selector: 'contact-editor-with-routing',
    templateUrl: 'contact-editor-with-routing.component.html'
})
export class ContactEditorWithRoutingComponent implements OnInit {

    private editing : boolean = false;

    @ViewChild(NgForm)
    contactForm : NgForm;

    editorContact : Contact = new Contact();

    private _contact : Contact = null;

    constructor(private route : ActivatedRoute, private router : Router, private contactService : ContactService, private contactHttpService : ContactHttpService, private confirmationDialogService : ConfirmationDialogService, private toastr : ToastrService) { }

    get  countries() : string[] {
        return ContactData.countries;
    }

    @Input()
    set contact(value : Contact) {
        this._contact = value;
        this.resetForm();
        this.setEditing(false);
        this.editorContact = value != null ? value.copy() : new Contact();

    }

    edit() : void {
        this.setEditing(true);
    }

    save() : void {
        if (this.contactForm.valid) {
            this.contactService.saveContact(this.editorContact);
            this.close();
        } else {
            this.toastr.error("You need to correct your errors");
        }
    }

    cancel() : void {
        this.resetForm(this._contact);
        this.setEditing(false);
    }

    private clear() : void {
        this.editorContact = new Contact();
        this._contact = null;
        this.resetForm();
        this.setEditing(false);
    }

    close() : void {
        this.clear();
        this.router.navigate(['..'])
    }

    resetForm(value:any={}) : void {
        this.contactForm.resetForm(value);
    }

    private setEditing(value:boolean) {
       this.editing = value;
    }

    canDeactivate() : boolean|Observable<boolean> {
        if (!this.editing) return true;

        return this.confirmationDialogService.confirm("Do you want to cancel your edits?");

    }

    ngOnInit(): void {
        //let snapshot : ActivatedRouteSnapshot = this.route.snapshot;
        //this.contact = this.contactService.getContact(snapshot.params['id']);

        this.route.params.map(params => params["id"]).subscribe(
            (contactId:number) => {
                this.contact = this.contactService.getContact(contactId)
            }
        );

    }


}