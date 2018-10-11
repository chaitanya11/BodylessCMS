import { Component, OnInit } from '@angular/core';
import { ConfigService } from "../../aws-services/config/config.service";
import { Router, ActivatedRoute } from "@angular/router";
import { EventEmitter } from "events";
import { Config } from "../../aws-services/config/index";
import { HttpClient } from '@angular/common/http';
import Theme from "../beans/theme.bean";
import GrapesjsInit from "../grapesjs-config/initialization.config";

declare var grapesjs: any; // Important!

/**
 * This is a the base component for building the WebPages using the GrapeJs.
 */
@Component({
    selector: 'app-webpage-builder',
    template: '<div id="gjs"></div>'
})
export class WebPageBuilderComponent implements OnInit {
    eventEmitter = new EventEmitter();
    editor: any;
    template: string;
    constructor(private _configService: ConfigService,
        private router: Router,
        private route: ActivatedRoute,
        private http: HttpClient) {
        // get template
        this.template = this.route.snapshot.paramMap.get('template');
        // register events.
        this.registerEvents();
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

    registerEvents() {
        this.eventEmitter.on('gjs-signOut', data => {
            this.router.navigateByUrl('/admin/logout');
        });
        this.eventEmitter.on('gjs-saveTemplate', data => {
            // save template to aws.
            console.log('save template');
            this.saveTemplate();
        });
    }

    async loadTheme(themeName: string): Promise<Theme> {
        return new Promise<Theme>((resolve, reject) => {
            // load template.
            this.http.get<Theme>('/assets/themes/' + themeName + '.json').subscribe(
                (res: Theme) => {
                    console.log(res);
                    resolve(res);
                },
                err => {
                    // TODO on 404 redirect to admin page.
                    console.error(err);
                    reject(err);
                }
            );
        });
    }

    async start() {
        let selectedTheme = await this.loadTheme(this.template);
        let grapesjsInitObject = GrapesjsInit.initializationTemplate(
            Config.bucketname,
            this._configService.accessKeyId,
            this._configService.secretAccessKey,
            this._configService.sessionToken,
            this.eventEmitter,
            selectedTheme.components,
            selectedTheme.styles
        );
        this.editor = grapesjs.init(grapesjsInitObject);

    }

    saveTemplate() {
        const components = this.editor.getComponents();
        const style = this.editor.getStyle();
        /**
         * TODO save template.
         * Steps
         * Take screenshot of them designed theme.
         * Upload the screenshot and new theme json to s3.
         */
    }
}