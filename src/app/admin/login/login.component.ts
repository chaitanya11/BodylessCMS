import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CognitoService } from '../../services/aws/cognito/cognito.service';
import { ConfigService } from '../../services/aws/config/config.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userName = '';
  password = '';

  constructor(private _cognitoService: CognitoService,
    private _configService: ConfigService,
    private router: Router) { }

  ngOnInit() {
  }

  async login() {
    console.log(this.userName, this.password);
    try {
      const result = await this._cognitoService.login(this.userName, this.password);
      this._configService.setConfig(result['accessKeyId'], result['secretAccessKey'],
       result['sessionToken']);
       localStorage.setItem('sessionToken', result['sessionToken']);
       localStorage.setItem('accessKeyId', result['accessKeyId']);
       localStorage.setItem('secretAccessKey', result['secretAccessKey']);
      this.router.navigateByUrl('admin');
    } catch (err) {
      console.error(err);
    }
  }
}
