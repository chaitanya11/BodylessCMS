import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import ThemeMap from "../beans/thememap.bean";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  themes: Array<ThemeMap> = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.listAvailableTemplates();
  }

  createNewTheme() {
    /**
     * TODO create new theme.
     * Steps:
     * Ask for themplate name.
     * Create a json with template name in s3 with empty grapesjs template.
     * Add that to themeMap.json and put in s3.
     * Redirect to webpagebuilder with given template name.
     */

    console.log('create new theme.');
  }

  listAvailableTemplates() {
    /**
     * Check for themeMap.json file in assets/themes folder.
     * List all the themes got in the response.
     */
    this.http.get<Array<ThemeMap>>('/assets/themes/themeMap.json').subscribe(
      (res:Array<ThemeMap>) => {
        this.themes = res;
      },
      err => {
        // TODO something went wrong.
        console.error(err);
      }
    );
  };
}
