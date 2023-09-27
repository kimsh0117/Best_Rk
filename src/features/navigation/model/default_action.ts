import {ImplNavigationAction} from "./impl_navigation_action";
import {Navigation} from "./navigation.ts";

export class DefaultAction extends ImplNavigationAction {
    // @ts-ignore
    start(context: Navigation , event: TouchEvent | PointerEvent) {
        if(event.type === 'pointerdown') {
            context.initialY = (event as PointerEvent).clientY
        } else if(event.type === 'touchstart') {
            context.initialY = (event as TouchEvent).touches[0].clientY
        }

        context.active = true
        context.effect = 'none'
    }
    // @ts-ignore
    end(context: Navigation) {
        context.active = false;
        if(context.yOffset <= 0) {
            if(context.current > 0) {
                context.current = context.current - 1
            }
        } else {
            if(context.current < 2) {
                context.current = context.current + 1
            }
        }
        context.barHeight = context.getCurrentState()
    }
    // @ts-ignore
    drag(context: Navigation, event: TouchEvent | PointerEvent) {
        if(context.active) {
            if(event.type === 'pointermove') {
                context.yOffset = context.initialY - (event as PointerEvent).clientY;
            } else if(event.type === 'touchmove') {
                context.yOffset = context.initialY - (event as TouchEvent).touches[0].clientY;
            }
            context.barHeight = context.getCurrentState() + context.yOffset;
        }
    }
    // @ts-ignore
    focus(context: Navigation) {
        context.effect = 'height 0.2s ease-out'
        context.current = 2
        context.barHeight = context.getCurrentState()
    }
    // @ts-ignore
    scroll(context: Navigation, event: Event) {
        context.effect = 'height 0.2s ease-out'
        let el = event.target as HTMLElement
        if(el.scrollTop > 0) {
            context.current = 2
            context.barHeight = context.getCurrentState()
        }

        if(el.scrollTop === 0) {
            if(context.current > 0) {
                context.current = context.current - 1
                context.barHeight = context.getCurrentState()
            }
        }
    }
}