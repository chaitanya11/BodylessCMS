import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import ThemeMap from 'src/app/admin/beans/thememap.bean';
import ThemeConstants from 'src/app/admin/constants/theme.constants';
import { Observable } from 'rxjs';
import Theme from 'src/app/admin/beans/theme.bean';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor(private http: HttpClient) { }

  listAvailableTemplates(): Observable<Array<ThemeMap>> {
    /**
     * Check for themeMap.json file in assets/themes folder.
     * List all the themes got in the response.
     */
    return this.http.get<Array<ThemeMap>>(ThemeConstants.THEME_MAPPING_FILE_NAME);
  }

  loadTheme(themeName: string): Observable<Theme> {
    // load template.
    return this.http.get<Theme>(ThemeConstants.THEME_FILE_PREFIX + themeName + '.json');
  }
}
