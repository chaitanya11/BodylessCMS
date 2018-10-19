import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../services/aws/config/config.service';
import { Router, ActivatedRoute } from '@angular/router';
import { EventEmitter } from 'events';
import { Config } from '../../services/aws/config/index';
import Theme from '../beans/theme.bean';
import GrapesjsInit from '../grapesjs-config/initialization.config';
import { ThemeService } from '../../services/themes/theme.service';
import { S3Service } from '../../services/aws/s3/s3.service';
import * as html2canvas from 'html2canvas';
import ThemeConstants from '../constants/theme.constants';
import { AppConstants } from '../constants/app.constants';
import ThemeMap from '../beans/thememap.bean';
import { LoaderService } from '../../services/loader/loader.service';



declare var grapesjs: any; // Important!
declare var $: any;

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
        private _s3Service: S3Service,
        private _loadderService: LoaderService) {
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
        const ngCodeBucket = Config.bucketname;
        this.selectedTheme = await this.loadTheme();
        const grapesjsInitObject = GrapesjsInit.initializationTemplate(
            ngCodeBucket,
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
        this._loadderService.show();
        const components = this.editor.getComponents();
        const styles = this.editor.getStyle();
        /**
         * save template.
         * Steps
         * Take screenshot of them designed theme.
         * Upload the screenshot and new theme json to s3.
         */
        const ngBucketName = 'ng-' + Config.bucketname;
        this.selectedTheme.components = components;
        this.selectedTheme.styles = styles;
        // uploading theme to s3.
        await this._s3Service.putObject(JSON.stringify(this.selectedTheme),
            ThemeConstants.THEME_FILE_PREFIX + this.template + '.json',
            ngBucketName,
            AppConstants.JSON_CONTENT_TYPE);

        // take screenshot.

        html2canvas(document.getElementsByClassName('gjs-cv-canvas')[0], {
            useCORS: true
        }).then(async canvas => {
            let imgData = canvas.toDataURL(AppConstants.PNG_CONTENT_TYPE);
            imgData = this.dataURItoBlob(imgData);
            await this._s3Service.putObject(imgData,
                ThemeConstants.IMG_PREFIX + this.template + '.png',
                ngBucketName,
                AppConstants.PNG_CONTENT_TYPE);
        });

        // update themeMappings file for new screenshot.
        let themeMappings: Array<ThemeMap> = [];
        this._themeService.listAvailableTemplates().subscribe(
            async (res: Array<ThemeMap>) => {
                themeMappings = res;
                themeMappings.map(tm => {
                    if (tm.name === this.template) {
                        tm.image = '../../../assets/img/' + this.template + '.png';
                    }
                });
                await this._s3Service.putObject(JSON.stringify(themeMappings),
                    ThemeConstants.THEME_MAPPING_FILE_NAME,
                    ngBucketName,
                    AppConstants.JSON_CONTENT_TYPE);
                this._loadderService.hide();
            },
            err => {
                // TODO something went wrong.
                console.error(err);
            }
        );
    }

    dataURItoBlob(dataURI) {
        const binary = atob(dataURI.split(',')[1]);
        const array = [];
        for (let i = 0; i < binary.length; i++) {
            array.push(binary.charCodeAt(i));
        }
        return new Blob([new Uint8Array(array)], { type: AppConstants.PNG_CONTENT_TYPE });
    }
}
