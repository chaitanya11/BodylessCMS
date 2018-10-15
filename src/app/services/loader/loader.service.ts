import { Injectable } from '@angular/core';

declare var $;

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  constructor() {
    this.showLoader();
  }

  /**
   * Display loader.
   */
  showLoader() {
    $('#cover-spin').style.display = 'block';
  }

  /**
   * Hides loader.
   */
  hideLoader() {
    $('#cover-spin').style.display = 'none';
  }
}
