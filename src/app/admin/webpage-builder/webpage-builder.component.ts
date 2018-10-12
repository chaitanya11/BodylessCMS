import { Component, OnInit } from '@angular/core';
import { ConfigService } from "../../services/aws/config/config.service";
import { Router, ActivatedRoute } from "@angular/router";
import { EventEmitter } from "events";
import { Config } from "../../services/aws/config/index";
import Theme from "../beans/theme.bean";
import GrapesjsInit from "../grapesjs-config/initialization.config";
import { ThemeService } from "../../services/themes/theme.service";
import { S3Service } from "../../services/aws/s3/s3.service";
// import * as html2canvas from "html2canvas";
import ThemeConstants from '../constants/theme.constants';
// import ThemeMap from '../beans/thememap.bean';


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
    selectedTheme: Theme;
    constructor(private _configService: ConfigService,
        private router: Router,
        private route: ActivatedRoute,
        private _themeService: ThemeService,
        private _s3Service: S3Service) {
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

    async loadTheme(): Promise<Theme> {
        return new Promise<Theme>((resolve, reject) => {
            // load template.
            this._themeService.loadTheme(this.template).subscribe(
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
        this.selectedTheme = await this.loadTheme();
        let grapesjsInitObject = GrapesjsInit.initializationTemplate(
            Config.bucketname,
            this._configService.accessKeyId,
            this._configService.secretAccessKey,
            this._configService.sessionToken,
            this.eventEmitter,
            this.selectedTheme.components,
            this.selectedTheme.styles
        );
        this.editor = grapesjs.init(grapesjsInitObject);

    }

    async saveTemplate() {
        const components = this.editor.getComponents();
        const styles = this.editor.getStyle();
        /**
         * TODO save template.
         * Steps
         * Take screenshot of them designed theme.
         * Upload the screenshot and new theme json to s3.
         */
        let ngBucketName = 'ng-' + Config.bucketname;
        this.selectedTheme.components = components;
        this.selectedTheme.styles = styles;
        // uploading theme to s3.
        await this._s3Service.putObject(JSON.stringify(this.selectedTheme),
            ThemeConstants.THEME_FILE_PREFIX + this.template + '.json',
            ngBucketName,
            "application/json");

        // // take screenshot.
        // html2canvas(document.body).then(async canvas => {
        //     var imgData = canvas.toDataURL("image/png");
        //     await this._s3Service.putObject(imgData,
        //         ThemeConstants.IMG_PREFIX + this.template + '.png',
        //         ngBucketName,
        //         "image/png");
        // });

        // // update themeMappings file for new screenshot.
        // let themeMappings: Array<ThemeMap> = [];
        // this._themeService.listAvailableTemplates().subscribe(
        //     async (res: Array<ThemeMap>) => {
        //         themeMappings = res;
        //         themeMappings.map(tm => {
        //             if (tm.name === this.template) {
        //                 tm.image = '../../../assets/img' + this.template + '.png';
        //             }
        //         });
        //         await this._s3Service.putObject(JSON.stringify(themeMappings),
        //         ThemeConstants.THEME_MAPPING_FILE_NAME,
        //         ngBucketName,
        //         "application/json");
        //     },
        //     err => {
        //         // TODO something went wrong.
        //         console.error(err);
        //     }
        // );
    }

}