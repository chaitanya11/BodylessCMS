import { Component, OnInit, Output, EventEmitter } from '@angular/core';

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
  contextMenuEvent: string;
  componentPlace: string;

  constructor() { }

  ngOnInit() {
  }

  showContextMenu(event, place) {
    this.componentPlace = place;
    this.isContextVisible = true;
    this.contextMenuX = event.clientX;
    this.contextMenuY = event.clientY;
    this.contextValue = place;
    console.log(event, place);
  }

  captureContextAction(eventName) {
    this.contextMenuEvent = eventName;
    this.isContextVisible = false;
    console.log(eventName);
  }
}
