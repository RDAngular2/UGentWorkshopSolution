import {Component, Input, ViewChild, OnInit, Output, EventEmitter} from '@angular/core';
import {Contact} from "../../model/contact";
import {ContactData} from "../../demo-data/contact-data";
import {NgForm} from "@angular/forms";
import {ContactService} from "../../service/contact/contact.service";
import {ToastrService} from "toastr-ng2";

@Component({
    moduleId: module.id,
    selector: 'contact-editor',
    templateUrl: 'contact-editor.component.html'
})
export class ContactEditorComponent implements OnInit {

    @ViewChild(NgForm)
    contactForm : NgForm;

    editorContact : Contact = new Contact();

    private _contact : Contact = null;

    @Output()
    contactDetailAction : EventEmitter<string> = new EventEmitter<string>();

    constructor(private contactService : ContactService, private toastr : ToastrService) { }

    get  countries() : string[] {
        return ContactData.countries;
    }

    @Input()
    set contact(value : Contact) {
        this._contact = value;
        this.resetForm();
        this.editorContact = value != null ? value.copy() : new Contact();
    }

    save() : void {
        if (this.contactForm.valid) {
            this.contactService.saveContact(this.editorContact);
            this.close("contactDetailSaved");
        } else {
            this.toastr.error("You need to correct your errors");
        }
    }

    close(action:string="contactDetailAborted") : void {
        this.editorContact = new Contact();
        this._contact = null;
        this.resetForm();
        this.contactDetailAction.next(action);
    }

    resetForm(value:any={}) : void {
        this.contactForm.resetForm(value);
    }

    ngOnInit(): void {
        console.log(this.contactForm);
    }


}