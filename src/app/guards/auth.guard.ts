import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ConfigService } from "../aws-services/config/config.service";


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
      (!this._configService.checkConfig()) ? 
      this._configService.setConfig(accessKeyId, secretAccessKey, sessionToken) : null;
      return true;
    }
    this.router.navigate(['/admin/login']);
    return false;
  }
}
