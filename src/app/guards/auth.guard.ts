import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ConfigService } from '../services/aws/config/config.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router,
    private _configService: ConfigService) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const sessionToken = localStorage.getItem('sessionToken');
    const accessKeyId = localStorage.getItem('accessKeyId');
    const secretAccessKey = localStorage.getItem('secretAccessKey');
    if ([sessionToken, accessKeyId, secretAccessKey].every((key) => key != undefined)) {
      if (!this._configService.checkConfig()) {
        this._configService.setConfig(accessKeyId, secretAccessKey, sessionToken);
      }
      return true;
    }
    this.router.navigate(['/admin/login']);
    return false;
  }
}
