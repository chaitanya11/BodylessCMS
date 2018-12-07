# BodylessCMS

BodylessCMS doesn't require any kind of Backend or database or any kind of third party api's, but can provide content management and scalability to any extent. The main objective of this project to cut down infrastructure cost and complexity of CMS. We already has a concept of [HeadlessCMS](https://en.wikipedia.org/wiki/Headless_CMS), which has plain user interface to serve content from third party api's. That requires reliable third party to store our content and cost for content management and for security of data. In BodylessCMS you just need AWS s3 to serve content and to manage website. Security has no issues, reliable and scalable to any extent.

Here is an article about BodylessCMS in [Meidum](https://medium.com/@chaitanya.garikipati123/bodylesscms-e2a83a841cd).

## Running in local
Have all the requirements ready before running application in local.
```
git clone https://github.com/chaitanya11/BodylessCMS.git
cd BodylessCMS
npm i
npm start
```
Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Requirements
* All the requirements can be created using [cli](https://github.com/chaitanya11/bodyless-cli), if you want to created them manually create bellow mentioned aws resources.
* Aws s3 bucket with name ```bodlylesscms``` and create a folder ```content/img``` have required images in this folder.
* Aws cognito userpool and identity pool linked to that userpool.
* Two roles for authenticated users and un-authenticated users.
    Role for authenticated users
    ```
    {
        "Version": "2012-10-17",
        "Statement": [
            {
                "Effect": "Allow",
                "Action": [
                    "mobileanalytics:PutEvents",
                    "cognito-sync:*",
                    "cognito-identity:*",
                    "s3:*"
                ],
                "Resource": [
                    "*"
                ]
            }
        ]
    }
    ```

    Role for un-authenticated users
    ```
    {
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": [
                "mobileanalytics:PutEvents",
                "cognito-sync:*"
            ],
            "Resource": [
                "*"
            ]
        }
        ]
    }
    ```
* client for cognito user pool with out generating secretkey.
* Navigate to ```src/app/aws-services/config/index.ts```, add these details 
    ```
    userPoolId= '<Aws Cognito Userpool Id>';
    clientId = '<Aws Cognito Userpool Client Id>';
    identityPoolId = '<Aws Cognito Identitypool  Id>';
    awsRegion = '<Aws Region>';
    bucketname = '<Aws bucketname>';
    projectName = '<Aws projectName>';
    ```
* signup with new user, go to cognito and confirm his status.   (use these credentials for logging into application.)



## checkpoints
* ~~Webpack integration~~
* ~~S3 integration~~
* ~~Save Content designed from admin dashboard to S3.~~
* ~~Integrate cognito~~
* ~~Add security to application.~~
* ~~create a component for conforming user status.~~
* Make this as Progressive Web App (PWA)
* Implement tree shaking for build pack.
* Create diffrent kinds of grapesJS plugins to support diffrent types of analytics and etc.
* All other improvements (Themes, preview, different kinds of content, etc).
