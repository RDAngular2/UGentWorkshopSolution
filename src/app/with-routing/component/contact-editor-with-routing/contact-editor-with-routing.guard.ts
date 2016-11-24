import {CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {ContactEditorWithRoutingComponent} from "./contact-editor-with-routing.component";
import {Observable} from "rxjs";

export class EditCancelationGuard  implements CanDeactivate<ContactEditorWithRoutingComponent> {

    canDeactivate(component: ContactEditorWithRoutingComponent, route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>|Promise<boolean>|boolean {
        return component.canDeactivate();
    }

}
