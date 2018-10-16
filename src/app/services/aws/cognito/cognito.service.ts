import { Injectable } from '@angular/core';
import {
  CognitoUserPool, CognitoUser, CognitoUserAttribute, AuthenticationDetails,
  CognitoUserSession
} from 'amazon-cognito-identity-js';
import * as AWS from 'aws-sdk';
import { Config } from '../config';

@Injectable({
  providedIn: 'root'
})
export class CognitoService {
  userPool: CognitoUserPool;
  userPoolId: string;
  clientId: string;
  identityPoolId: string;
  cognitoUser: CognitoUser;

  constructor() {
    this.userPoolId = Config.userPoolId;
    this.clientId = Config.clientId;
    this.identityPoolId = Config.identityPoolId;
    this.userPool = new CognitoUserPool({
      UserPoolId: this.userPoolId,
      ClientId: this.clientId,
    });
  }

  signup(userName: string, password: string,
    email: string) {
    const attributeList = [];
    const attributeEmail = new CognitoUserAttribute({ Name: 'email', Value: email });

    attributeList.push(attributeEmail);

    this.userPool.signUp(userName, password, attributeList, null, (err, data) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log(data.user);
    });
  }

  login(userName: string, password: string) {
    return new Promise((resolve, reject) => {
      const authenticationDetails = new AuthenticationDetails({
        Username: userName,
        Password: password,
      });

      this.cognitoUser = new CognitoUser({
        Username: userName,
        Pool: this.userPool,
      });

      this.cognitoUser.authenticateUser(authenticationDetails, {
        onSuccess: async (cognitoUserSession) => {
          console.log(cognitoUserSession);
          const result = await this.retriveKeys(cognitoUserSession);
          resolve(result);
        },
        onFailure: (err) => {
          console.error(err);
          reject(err);
        },
      });
    });
  }

  retriveKeys(cognitoUserSession: CognitoUserSession) {
    return new Promise((resolve, reject) => {
      const jwtToken = cognitoUserSession.getIdToken().getJwtToken();

      const providerKey = `cognito-idp.${Config.awsRegion}.amazonaws.com/${Config.userPoolId}`;
      console.log(providerKey);
      AWS.config.region = Config.awsRegion;

      AWS.config.credentials = new AWS.CognitoIdentityCredentials({
        IdentityPoolId: this.identityPoolId,
        Logins: {
          [providerKey]: jwtToken,
        },
      });

      AWS.config.getCredentials((error) => {
        if (error) {
          console.error(error);
          reject(error);
          return;
        }

        const { accessKeyId, secretAccessKey, sessionToken } = AWS.config.credentials;
        console.log(AWS.config.credentials);
        resolve({ accessKeyId, secretAccessKey, sessionToken });
      });
    });
  }

  signOut() {
    if (this.cognitoUser) {
      this.cognitoUser.signOut();
    }
  }
}
