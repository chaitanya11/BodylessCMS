import { Component, OnInit } from '@angular/core';

declare var grapesjs: any; // Important!

/**
 * This is a the base component for building the WebPages using the GrapeJs.
 */
@Component({
    selector: 'app-webpage-builder',
    template: '<div id="gjs"></div>'
})
export class WebPageBuilderComponent implements OnInit {

    ngOnInit() {
        grapesjs.init({
            container: '#gjs',
            components: '<div class="txt-red">Hello folks! Welcome to Bodyless CMS</div>',
            style: '.txt-red{color: blue}',
            plugins: ['gjs-preset-webpage'],
            pluginsOpts: {
                'gjs-preset-webpage': {/* ...options */ }
            }
        });
    }
}