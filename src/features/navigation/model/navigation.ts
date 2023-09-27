import {Constants} from "../../../constants/constants";
import {INavigationAction} from "./inavigation_action";

/**
 * this class is Singleton
 */
export class Navigation {
    static key = Symbol('navigationModel')
    private static _instance: Navigation

    private _innerHeight: number = 0

    private _active = false
    private _initialY: any
    private _yOffset = 0
    private _effect: any

    private _current = 0
    private _barHeight = Constants.NAVIGATION_LOWER
    private _states = [Constants.NAVIGATION_LOWER]

    private _action: INavigationAction | undefined
    constructor() {
        if(Navigation._instance) {
            return Navigation._instance
        }
        Navigation._instance = this

        this.innerHeight = window.innerHeight
        this.generateStates()
    }
    static getInstance(){
        if(!Navigation._instance) {
            Navigation._instance = new Navigation()
        }
        return Navigation._instance
    }
    get effect() {
        return this._effect
    }
    set effect(effect: string) {
        this._effect = effect
    }
    get initialY() {
        return this._initialY
    }
    set initialY(y: number) {
        this._initialY = y
    }
    get yOffset() {
        return this._yOffset
    }
    set yOffset(y: number) {
        this._yOffset = y
    }
    generateStates(){
        let part = this.innerHeight / 3

        this.states = part
        this.states = part * 2
    }
    set innerHeight(height: number) {
        this._innerHeight = height
    }
    get innerHeight() {
        return this._innerHeight
    }
    getCurrentState(){
        return this._states[this._current]
    }
    set states(state: number) {
        this._states.push(state)
    }
    get current() {
        return this._current
    }
    set current(current: number) {
        this._current = current
    }
    get active(){
        return this._active
    }
    set active(value: boolean) {
        this._active = value
    }

    get barHeight() {
        return this._barHeight
    }
    set barHeight(height: number) {
        this._barHeight = height
    }
    get action() {
        return this._action
    }
    set action(action: INavigationAction | undefined) {
        this._action = action
    }
}