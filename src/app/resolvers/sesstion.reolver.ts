import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ConfigService } from '../services/aws/config/config.service';

@Injectable({
    providedIn: 'root'
})
export class SessionResolver implements Resolve<Observable<string>> {
  constructor(private _configService: ConfigService) {}

  resolve(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<any>|Promise<any>|any {
    console.log(this._configService.accessKeyId);
    return ;
  }
}
