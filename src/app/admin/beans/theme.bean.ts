export default class Theme {
    components: Array<any> | string;
    styles: Array<any> | string;
    constructor(components: Array<any> | string, styles: Array<any> | string) {
        this.components = components;
        this.styles = styles;
    }
}