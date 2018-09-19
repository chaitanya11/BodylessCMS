import { Component, OnInit } from '@angular/core';
import { ConfigService } from "../../aws-services/config/config.service";
import { Router } from "@angular/router";

declare var grapesjs: any; // Important!

/**
 * This is a the base component for building the WebPages using the GrapeJs.
 */
@Component({
    selector: 'app-webpage-builder',
    template: '<div id="gjs"></div>'
})
export class WebPageBuilderComponent implements OnInit {

    constructor(private _configService: ConfigService,
        private router: Router) { }

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
        grapesjs.init({
            container: '#gjs',
            components: '<div class="txt-red">Hello folks! Welcome to Bodyless CMS</div>',
            style: '.txt-red{color: blue}',
            plugins: ['gjs-plugin-s3', 'gjs-blocks-basic', 'gjs-plugin-publish-s3'],
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
                }
            }
        });
    }
}