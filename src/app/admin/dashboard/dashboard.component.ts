import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import ThemeMap from '../beans/thememap.bean';
import Theme from '../beans/theme.bean';
import ThemeConstants from '../constants/theme.constants';
import { S3Service } from '../../services/aws/s3/s3.service';
import { Config } from '../../services/aws/config/index';
import { Router } from '@angular/router';
import { ThemeService } from '../../services/themes/theme.service';
import { AppConstants } from '../constants/app.constants';

declare var $: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  themeMappings: Array<ThemeMap> = [];
  createThemeForm: any;
  emptyImg = '../../../assets/img/empty.png';
  ngBucketName = 'ng-' + Config.bucketname;

  constructor(
    private fb: FormBuilder,
    private _s3Service: S3Service,
    private router: Router,
    private _themeService: ThemeService) {
    this.createThemeForm = this.fb.group({
      themeName: ['', Validators.required],
      themeDescription: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.listAvailableTemplates();
  }

  async createNewTheme() {
    /**
     * create new theme.
     * Steps:
     * Ask for themplate name.
     * Create a json with template name in s3 with empty grapesjs template.
     * Add that to themeMap.json and put in s3.
     * Redirect to webpagebuilder with given template name.
     */
    console.log('create new theme.');
    const themeName = this.createThemeForm.value.themeName;
    const themeFileName = ThemeConstants.THEME_FILE_PREFIX + themeName + '.json';
    const newThemeMapping = new ThemeMap(themeName,
      this.emptyImg,
      this.createThemeForm.value.themeDescription);
    const newTheme = new Theme(ThemeConstants.NEW_GRAPESJS_COMPONENTS,
      ThemeConstants.NEW_GRAPESJS_STYLES);
    this.themeMappings.push(newThemeMapping);
    await this._s3Service.putObject(
      JSON.stringify(newTheme),
      themeFileName,
      this.ngBucketName,
      AppConstants.JSON_CONTENT_TYPE
    );
    await this._s3Service.putObject(
      JSON.stringify(this.themeMappings),
      ThemeConstants.THEME_MAPPING_FILE_NAME,
      this.ngBucketName,
      AppConstants.JSON_CONTENT_TYPE
    );
    $('#createThemeModalClose').click();
    // redirecting to new theme page.
    this.router.navigateByUrl('admin/webpagebuilder/' + themeName);
  }

  listAvailableTemplates() {
    /**
     * Check for themeMap.json file in assets/themes folder.
     * List all the themes got in the response.
     */
    this._themeService.listAvailableTemplates().subscribe(
      (res: Array<ThemeMap>) => {
        this.themeMappings = res;
      },
      err => {
        // TODO something went wrong.
        console.error(err);
      }
    );
  }

  navigateToTheme(themeName: string) {
    this.router.navigateByUrl('admin/webpagebuilder/' + themeName);
  }
}
