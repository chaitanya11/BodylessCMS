import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { CognitoService } from "../../aws-services/cognito/cognito.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  providers: [ CognitoService ]
})
export class SignupComponent implements OnInit {
  email = '';
  userName = '';
  password = '';

  constructor(private _cognitoService: CognitoService,
    private router: Router) {

   }

  ngOnInit() {
  }

  signup() {
    console.log(this.email, this.userName, this.password);
    this._cognitoService.signup(this.userName, this.password, this.email);
    console.log("Signup is completed, redirecting to login page ...");
    this.router.navigateByUrl('admin/login');
  }
}
