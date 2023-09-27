import {Navigation} from "./navigation";

export interface INavigationAction {
    start(context: Navigation, event: TouchEvent | PointerEvent): void
    end(context: Navigation): void
    drag(context: Navigation, event: TouchEvent | PointerEvent): void
    focus(context: Navigation): void
    scroll(context: Navigation, event: Event): void
}