import {TPlace} from "../data";

export class Place {
    static key = Symbol('placeModel')
    private static _instance: Place

    private _places: TPlace[] = []
    private _categories = new Set()
    private _currentCategory: string = ''
    constructor() {
        if(Place._instance) {
            return Place._instance
        }
        Place._instance = this
    }
    static getInstance(){
        if(!Place._instance) {
            Place._instance = new Place()
        }
        return Place._instance
    }
    generateCategories() {
        this.getPlaces().forEach((place) => {
            this._categories.add(place.category)
        })
    }
    getPlaces() {
        return this._places
    }
    setPlaces(places: TPlace[]) {
        this._places = places
    }
    getCategories(){
        return this._categories
    }
    getByCategory(category: string) {
        return this._places.filter((place) => place.category === category)
    }
    get currentCategory() {
        return this._currentCategory
    }

    set currentCategory(category: string) {
        this._currentCategory = category
    }
}