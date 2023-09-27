export class Atlas {
    static key = Symbol('atlasModel')
    private static _instance: Atlas

    private _coords: number[] = []
    private _zoom: number | undefined
    private _apiKey: string | undefined
    private _lang: string | undefined
    private _coordorder: string | undefined
    private _version: string | undefined

    private _markerLayout: string | undefined
    private _markerImageHref: string | undefined
    private _markerImageWidth: number | undefined
    private _markerImageHeight: number | undefined
    private _markerImageOffsetX: number | undefined
    private _markerImageOffsetY: number | undefined
    private _markerContentLayout: string | undefined

    private _controlsRemove: string[] = []
    constructor() {
        if(Atlas._instance) {
            return Atlas._instance
        }
        Atlas._instance = this
    }

    static getInstance(){
        if(!Atlas._instance) {
            Atlas._instance = new Atlas()
        }
        return Atlas._instance
    }
    removeControls(map: any){
        this._controlsRemove.forEach((control) => {
            map.controls.remove(control)
        })
    }
    set controlsRemove(control: string) {
        this._controlsRemove.push(control)
    }
    getCoords() {
        return this._coords
    }
    setCoords(coords: number){
        this._coords.push(coords)
    }
    get zoom(){
        return this._zoom
    }
    set zoom(zoom: number | undefined) {
        this._zoom = zoom
    }
    get apiKey(){
        return this._apiKey
    }
    set apiKey(key: string | undefined) {
        this._apiKey = key
    }
    get lang(){
        return this._lang
    }
    set lang(lang: string | undefined) {
        this._lang = lang
    }
    get coordorder(){
        return this._coordorder
    }
    set coordorder(order: string | undefined) {
        this._coordorder = order
    }
    get version(){
        return this._version
    }
    set version(version: string | undefined) {
        this._version = version
    }
    get markerLayout(){
        return this._markerLayout
    }
    set markerLayout(layout: string | undefined){
        this._markerLayout = layout
    }
    get markerImageHref(){
        return this._markerImageHref
    }
    set markerImageHref(href: string | undefined) {
        this._markerImageHref = href
    }
    get markerImageWidth() {
        return this._markerImageWidth
    }
    set markerImageWidth(width: number | undefined) {
        this._markerImageWidth = width
    }
    get markerImageHeight(){
        return this._markerImageHeight
    }
    set markerImageHeight(height: number | undefined) {
        this._markerImageHeight = height
    }
    get markerImageOffsetX() {
        return this._markerImageOffsetX
    }
    set markerImageOffsetX(offsetX: number | undefined) {
        this._markerImageOffsetX = offsetX
    }
    get markerImageOffsetY() {
        return this._markerImageOffsetY
    }
    set markerImageOffsetY(offsetY: number | undefined) {
        this._markerImageOffsetY = offsetY
    }
    get markerContentLayout() {
        return this._markerContentLayout
    }
    set markerContentLayout(layout: string | undefined) {
        this._markerContentLayout = layout
    }
}