import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-shadow-contextmenu',
  templateUrl: './shadow-contextmenu.component.html',
  styleUrls: ['./shadow-contextmenu.component.scss']
})
export class ShadowContextmenuComponent implements OnInit {

  @Input() x = 0;
  @Input() y = 0;
  @Input() value;
  @Output('action') action: EventEmitter<string> = new EventEmitter<any>();
  editValue: boolean;

  constructor() { }

  ngOnInit() {
  }

  emitEvent(eventName) {
    this.action.emit(eventName);
  }
}
