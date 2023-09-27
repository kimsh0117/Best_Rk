import {INavigationAction} from "./inavigation_action";
import {Navigation} from "./navigation";

export class ImplNavigationAction implements INavigationAction {
    // @ts-ignore
    start(context: Navigation, event: TouchEvent | PointerEvent) {}
    // @ts-ignore
    end(context: Navigation) {
    }
    // @ts-ignore
    drag(context: Navigation, event: TouchEvent | PointerEvent) {
    }
    // @ts-ignore
    focus(context: Navigation) {
    }
    // @ts-ignore
    scroll(context: Navigation, event: Event) {
    }
}