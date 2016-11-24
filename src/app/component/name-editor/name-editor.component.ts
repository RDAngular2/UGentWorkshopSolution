import {Component, OnInit, ViewChild} from '@angular/core';
import {Person} from "./person.model";
import {NgForm} from "@angular/forms";

@Component({
    moduleId: module.id,
    selector: 'name-editor',
    templateUrl: 'name-editor.component.html'
})
export class NameEditorComponent {

    @ViewChild(NgForm) form;

    person = new Person();


    reset() : void {
        console.log(this.form.getError('required','name'))

        let x = this.form.form.get('name');
        this.form.reset();

    }



}