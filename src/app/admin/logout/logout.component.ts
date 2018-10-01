import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ConfigService } from "../../aws-services/config/config.service";
import { CognitoService } from "../../aws-services/cognito/cognito.service";

@Component({
  selector: 'app-logout',
  template: ''
})
export class LogoutComponent implements OnInit {

  constructor(private _configService: ConfigService,
    private router: Router,
    private _cognitoService: CognitoService) { }

  ngOnInit() {
    this.clearSession();
  }

  clearSession() {
    localStorage.clear();
    delete this._configService;
    this._cognitoService.signOut();
    this.router.navigateByUrl('/admin/login');
  }
}
