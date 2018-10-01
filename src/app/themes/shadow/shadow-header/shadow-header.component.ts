import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { Headerpage } from '../shadow-beans/header-page.bean';

@Component({
  selector: 'app-shadow-header',
  templateUrl: './shadow-header.component.html',
  styleUrls: ['./shadow-header.component.scss']
})
export class ShadowHeaderComponent implements OnInit {
  websiteName: string;
  pages: Array<Headerpage>;
  @Input('conetextMenuEvent') conetextMenuEvent: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
    this.subscribeToEvents();
    this.initHeader();
  }

  subscribeToEvents() {
    this.conetextMenuEvent.subscribe(data => {

    });
  }

  getHeaderData() {
    // TODO replace with aws code.
    const headerData = {
      webSiteName: 'ShadowFight',
      pages: [
        { name: 'Home', destination: 'dashboard', activeClass: 'active' },
        { name: 'Page1', destination: '#page2', activeClass: '' },
        { name: 'Page3', destination: '#page3', activeClass: '' }
      ]
    };
    return headerData;
  }

  initHeader() {
    const headerData = this.getHeaderData();
    this.websiteName = headerData.webSiteName;
    this.pages = headerData.pages;
  }


  captureContextAction(action) {
    console.log(action);
  }
}
