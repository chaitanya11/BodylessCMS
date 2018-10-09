import { Component, OnInit } from '@angular/core';
import { ConfigService } from "../../aws-services/config/config.service";
import { Router } from "@angular/router";
import { EventEmitter } from "events";

declare var grapesjs: any; // Important!

/**
 * This is a the base component for building the WebPages using the GrapeJs.
 */
@Component({
    selector: 'app-webpage-builder',
    template: '<div id="gjs"></div>'
})
export class WebPageBuilderComponent implements OnInit {
    signOutEventEmitter = new EventEmitter();
    constructor(private _configService: ConfigService,
        private router: Router) {
        this.signOutEventEmitter.on('gjs-signOut', data => {
            this.router.navigateByUrl('/admin/logout');
        });
    }

    ngOnInit() {
        const isConfigured = this._configService.checkConfig();
        console.log(isConfigured);
        if (!isConfigured) {
            console.error('redirect to login');
            this.router.navigateByUrl('admin/login');
        } else {
            this.start();
        }
    }

    start() {
        const editor = grapesjs.init({
            allowScripts: 1,
            container: '#gjs',
            components: '<div class="txt-red">Hello folks! Welcome to Bodyless CMS</div>',
            style: '.txt-red{color: blue}',
            plugins: ['gjs-plugin-s3', 'gjs-blocks-basic',
                'gjs-plugin-publish-s3',
                'gjs-plugin-button-event',
                'gjs-blocks-flexbox',
                'grapesjs-custom-code'
            ],
            pluginsOpts: {
                'gjs-plugin-s3': {
                    imgFormats: ["png", "jpeg", "jpg"],
                    bucketName: "bodylesscms",
                    prefix: "content/img/",
                    accessKeyId: this._configService.accessKeyId,
                    secretAccessKey: this._configService.secretAccessKey,
                    sessionToken: this._configService.sessionToken
                },
                'gjs-blocks-basic': {},
                'gjs-plugin-publish-s3': {
                    bucketName: "bodylesscms",
                    accessKeyId: this._configService.accessKeyId,
                    secretAccessKey: this._configService.secretAccessKey,
                    sessionToken: this._configService.sessionToken
                },
                'gjs-plugin-button-event': {
                    buttons: [{
                        name: 'signOut',
                        panel: 'options',
                        eventName: 'gjs-signOut',
                        icon: 'fa fa-sign-out',
                        active: false,
                        data: { message: 'Clear session.' },
                        eventEmitter: this.signOutEventEmitter
                    }]
                },
                'gjs-blocks-flexbox': {},
                'grapesjs-custom-code': {}
            }
        });

    }
}