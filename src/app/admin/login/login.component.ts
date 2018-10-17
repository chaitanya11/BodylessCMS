import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CognitoService } from '../../services/aws/cognito/cognito.service';
import { ConfigService } from '../../services/aws/config/config.service';
import { LoaderService } from '../../services/loader/loader.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit  {
  userName = '';
  password = '';

  constructor(private _cognitoService: CognitoService,
    private _configService: ConfigService,
    private _loader: LoaderService,
    private router: Router) { }

  ngOnInit() {
  }

  async login() {
    console.log(this.userName, this.password);
    try {
      this._loader.show();
      const result = await this._cognitoService.login(this.userName, this.password);
      this._configService.setConfig(result['accessKeyId'], result['secretAccessKey'],
        result['sessionToken']);
      localStorage.setItem('sessionToken', result['sessionToken']);
      localStorage.setItem('accessKeyId', result['accessKeyId']);
      localStorage.setItem('secretAccessKey', result['secretAccessKey']);
      this._loader.hide();
      this.router.navigateByUrl('admin');
    } catch (err) {
      console.error(err);
    }
  }
}
