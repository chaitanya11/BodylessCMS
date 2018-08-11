import { Component, OnInit } from '@angular/core';

declare var grapesjs: any; // Important!

/**
 * This is a the base component for building the WebPages using the GrapeJs.
 */
@Component({
    selector: 'webpage-builder',
    template: '<div id="sample"></div>'
})
export class WebPageBuilderComponent implements OnInit {

    ngOnInit() {
        grapesjs.init({
            container: '#sample',
            components: '<div class="txt-red">Hello folks! Welcome to Bodyless CMS</div>',
            style: '.txt-red{color: blue}',
            plugins: ['gjs-blocks-basic'],
            pluginsOpts: {
                'gjs-blocks-basic': {/* ...options */ }
            }
        });
    }
}