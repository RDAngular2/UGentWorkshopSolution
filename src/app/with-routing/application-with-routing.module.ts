import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";
import {FormsModule,ReactiveFormsModule} from "@angular/forms";
import {Routes, RouterModule} from "@angular/router";
import {TypeaheadModule, ModalModule, ComponentsHelper} from "ng2-bootstrap";
import {ToastrModule} from "toastr-ng2";

import {ApplicationHeaderWithRoutingComponent} from "./component/application-header-with-routing/application-header-with-routing.component";
import {ContactEditorComponent} from "../component/contact-editor/contact-editor.component";
import {ContactViewerComponent} from "../component/contact-viewer/contact-viewer.component";
import {ContactService} from "../service/contact/contact.service";
import {ContactListViewerComponent} from "../component/contact-list-viewer/contact-list-viewer.component";
import {InboxScreenComponent} from "../component/inbox-screen/inbox-screen.component";
import {ContactScreenComponent} from "../component/contact-screen/contact-screen.component";
import {ContactScreenWithRoutingComponent} from "./component/contact-screen-with-routing/contact-screen-with-routing.component";
import {ApplicationWithRoutingComponent} from "./application-with-routing.component";
import {ContactEditorWithRoutingComponent} from "./component/contact-editor-with-routing/contact-editor-with-routing.component";
import {ContactListViewerWithRoutingComponent} from "./component/contact-list-viewer-with-routing/contact-list-viewer-with-routing.component";
import {EditCancelationGuard} from "./component/contact-editor-with-routing/contact-editor-with-routing.guard";
import {ConfirmationDialogService} from "./component/confirmation-dialog/confirmation-dialog.service";
import {ConfirmationDialogComponent} from "./component/confirmation-dialog/confirmation-dialog.component";
import {ContactData} from "../demo-data/contact-data";
import {InMemoryWebApiModule} from "angular-in-memory-web-api";
import {ContactHttpService} from "../service/contact/contact.http.service";




const applicationRoutes: Routes = [
    { path: "", redirectTo: "/contacts", pathMatch: "full" },
    { path: "contacts", component: ContactScreenWithRoutingComponent,
        children : [
            {path: "contact/:id", component: ContactEditorWithRoutingComponent, canDeactivate: [EditCancelationGuard] }
        ]
    },
    { path: "inbox", component: InboxScreenComponent }
];

@NgModule({
    declarations: [
        ApplicationHeaderWithRoutingComponent,
        ApplicationWithRoutingComponent,
        ContactScreenWithRoutingComponent,
        ContactListViewerWithRoutingComponent,
        ContactEditorWithRoutingComponent,
        InboxScreenComponent,
        ConfirmationDialogComponent,

        ContactEditorComponent,
        ContactViewerComponent,
        ContactListViewerComponent,
        ContactScreenComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        RouterModule.forRoot(applicationRoutes),
        ModalModule,
        ToastrModule,
        TypeaheadModule,

        InMemoryWebApiModule.forRoot(ContactData,{delay:5000})

    ],
    bootstrap: [ApplicationWithRoutingComponent],
    providers: [ContactService,ContactHttpService,EditCancelationGuard,ConfirmationDialogService],
    schemas : [CUSTOM_ELEMENTS_SCHEMA]
})
export class ApplicationWithRoutingModule {

}


















/* Hack for dialog */
ComponentsHelper.prototype.getRootViewContainerRef = function () {
    // https://github.com/angular/angular/issues/9293
    if (this.root) {
        return this.root;
    }
    var comps = this.applicationRef.components;
    if (!comps.length) {
        throw new Error("ApplicationRef instance not found");
    }
    try {
        /* one more ugly hack, read issue above for details */
        var rootComponent = this.applicationRef._rootComponents[0];
        this.root = rootComponent._component.viewContainerRef;
        return this.root;
    } catch (e) {
        throw new Error("ApplicationRef instance not found");
    }
};
/* End Hack for dialog */