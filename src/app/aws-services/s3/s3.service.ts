import { Injectable } from '@angular/core';
import * as AWS from 'aws-sdk';

@Injectable({
  providedIn: 'root'
})
export class S3Service {

  private s3: AWS.S3;

  constructor() {
    this.s3 = new AWS.S3();
  }

  putObject(body: Buffer | Uint8Array | Blob | string, key: string, tagging: string, bucketName: string) {
    const params = {
      Body: body,
      Bucket: bucketName,
      Key: key,
      ServerSideEncryption: 'AES256',
      Tagging: tagging
    };


    this.s3.putObject(params, function (err, data) {
      if (err) {
        console.log(err, err.stack); // an error occurred
      } else {
        console.log(data);           // successful response
      }
      /*
      data = {
       ETag: "\"6805f2cfc46c0f04559748bb039d69ae\"",
       ServerSideEncryption: "AES256",
       VersionId: "Ri.vC6qVlA4dEnjgRV4ZHsHoFIjqEMNt"
      }
      */
    });
  }

  getObject(bucketName: string, key: string) {
    const params = {
      Bucket: bucketName,
      Key: key
    };
    this.s3.getObject(params, function (err, data) {
      if (err) {
        console.log(err, err.stack); // an error occurred
      } else {
        console.log(data);           // successful response
      }
      /*
      data = {
       AcceptRanges: "bytes",
       ContentLength: 3191,
       ContentType: "image/jpeg",
       ETag: "\"6805f2cfc46c0f04559748bb039d69ae\"",
       LastModified: <Date Representation>,
       Metadata: {
       },
       TagCount: 2,
       VersionId: "null"
      }
      */
    });
  }
}
