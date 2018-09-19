import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  public accessKeyId: string;
  public secretAccessKey: string;
  public sessionToken: string;
  constructor() { }
  setConfig(accessKeyId: string,
    secretAccessKey: string,
    sessionToken: string) {
      console.log('setting config', accessKeyId);
      this.accessKeyId = accessKeyId;
      this.secretAccessKey = secretAccessKey;
      this.sessionToken = sessionToken;
    }

  checkConfig() {
    console.log(this.accessKeyId);
    return [this.accessKeyId, this.secretAccessKey, this.sessionToken].some(
      (key) => key != undefined
    );
  }
}
