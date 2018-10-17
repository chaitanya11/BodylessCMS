import { Injectable } from '@angular/core';

declare var $;

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  constructor() {}

  /**
   * Display loader.
   */
  show() {
    $('#spin-block').css('display', 'block');
  }

  /**
   * Hides loader.
   */
  hide() {
    $('#spin-block').css('display', 'none');
  }
}
