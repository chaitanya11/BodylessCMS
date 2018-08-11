import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shadow-landing-page',
  templateUrl: './shadow-landing-page.component.html',
  styleUrls: ['./shadow-landing-page.component.scss']
})
export class ShadowLandingPageComponent implements OnInit {
  contextMenuX = 0;
  contextMenuY = 0;
  isContextVisible = false;
  contextValue: any;

  constructor() { }

  ngOnInit() {
  }

  showContextMenu(event, place) {
    this.isContextVisible = true;
    this.contextMenuX = event.clientX;
    this.contextMenuY = event.clientY;
    this.contextValue = place;
  }

  captureContextAction(eventName) {
    console.log(eventName);
  }
}
