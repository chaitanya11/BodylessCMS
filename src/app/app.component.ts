import { Component } from '@angular/core';
import { Config } from '../app/services/aws/config/index';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = Config.projectName;
  constructor(private _titleService: Title) {
    this._titleService.setTitle(Config.projectName);
  }
}
