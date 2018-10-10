# BodylessCMS

BodylessCMS doesn't require any kind of Backend or database or any kind of third party api's, but can provide content management and scalability to any extent. The main objective of this project to cut down infrastructure cost and complexity of CMS. We already has a concept of [HeadlessCMS](https://en.wikipedia.org/wiki/Headless_CMS), which has plain user interface to serve content from third party api's. That requires reliable third party to store our content and cost for content management and for security of data. In BodylessCMS you just need AWS s3 to serve content and to manage website. Security has no issues, reliable and scalable to any extent.

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
* All the requirements can be created using [bodyless-cli]("https://github.com/chaitanya11/bodyless-cli"), if you want to created them manually create bellow mentioned aws resources.
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
    ```
* signup with new user, go to cognito and confirm his status.   (use these credentials for logging into application.)



## Folder structure

````
.
├── LICENSE
├── README.md
├── angular.json
├── docs
├── e2e
│   ├── protractor.conf.js
│   ├── src
│   │   ├── app.e2e-spec.ts
│   │   └── app.po.ts
│   └── tsconfig.e2e.json
├── package-lock.json
├── package.json
├── src
│   ├── app
│   │   ├── admin
│   │   │   ├── admin-routing.module.ts
│   │   │   ├── admin.module.spec.ts
│   │   │   ├── admin.module.ts
│   │   │   ├── dashboard
│   │   │   │   ├── dashboard.component.html
│   │   │   │   ├── dashboard.component.scss
│   │   │   │   ├── dashboard.component.spec.ts
│   │   │   │   └── dashboard.component.ts
│   │   │   ├── login
│   │   │   │   ├── login.component.html
│   │   │   │   ├── login.component.scss
│   │   │   │   ├── login.component.spec.ts
│   │   │   │   └── login.component.ts
│   │   │   ├── logout
│   │   │   │   ├── logout.component.spec.ts
│   │   │   │   └── logout.component.ts
│   │   │   ├── signup
│   │   │   │   ├── signup.component.html
│   │   │   │   ├── signup.component.scss
│   │   │   │   ├── signup.component.spec.ts
│   │   │   │   └── signup.component.ts
│   │   │   └── webpage-builder
│   │   │       └── webpage-builder.component.ts
│   │   ├── app-routing.module.ts
│   │   ├── app.component.html
│   │   ├── app.component.scss
│   │   ├── app.component.spec.ts
│   │   ├── app.component.ts
│   │   ├── app.module.ts
│   │   ├── aws-services
│   │   │   ├── cognito
│   │   │   │   ├── cognito.service.spec.ts
│   │   │   │   └── cognito.service.ts
│   │   │   ├── config
│   │   │   │   ├── config.service.spec.ts
│   │   │   │   ├── config.service.ts
│   │   │   │   └── index.ts
│   │   │   └── s3
│   │   │       ├── s3.service.spec.ts
│   │   │       └── s3.service.ts
│   │   ├── guards
│   │   │   ├── auth.guard.spec.ts
│   │   │   └── auth.guard.ts
│   │   ├── page-not-found
│   │   │   ├── page-not-found.component.html
│   │   │   ├── page-not-found.component.scss
│   │   │   ├── page-not-found.component.spec.ts
│   │   │   └── page-not-found.component.ts
│   │   ├── resolvers
│   │   │   └── sesstion.reolver.ts
│   │   └── themes
│   │       └── shadow
│   │           ├── shadow-beans
│   │           │   └── header-page.bean.ts
│   │           ├── shadow-contextmenu
│   │           │   ├── shadow-contextmenu.component.html
│   │           │   ├── shadow-contextmenu.component.scss
│   │           │   ├── shadow-contextmenu.component.spec.ts
│   │           │   └── shadow-contextmenu.component.ts
│   │           ├── shadow-dashboard
│   │           │   ├── shadow-dashboard.component.html
│   │           │   ├── shadow-dashboard.component.scss
│   │           │   ├── shadow-dashboard.component.spec.ts
│   │           │   └── shadow-dashboard.component.ts
│   │           ├── shadow-footer
│   │           │   ├── shadow-footer.component.html
│   │           │   ├── shadow-footer.component.scss
│   │           │   ├── shadow-footer.component.spec.ts
│   │           │   └── shadow-footer.component.ts
│   │           ├── shadow-header
│   │           │   ├── shadow-header.component.html
│   │           │   ├── shadow-header.component.scss
│   │           │   ├── shadow-header.component.spec.ts
│   │           │   └── shadow-header.component.ts
│   │           ├── shadow-landing-page
│   │           │   ├── shadow-landing-page.component.html
│   │           │   ├── shadow-landing-page.component.scss
│   │           │   ├── shadow-landing-page.component.spec.ts
│   │           │   └── shadow-landing-page.component.ts
│   │           ├── shadow-routing.module.ts
│   │           ├── shadow.module.spec.ts
│   │           └── shadow.module.ts
│   ├── assets
│   │   └── shadow-fight.png
│   ├── browserslist
│   ├── environments
│   │   ├── environment.prod.ts
│   │   └── environment.ts
│   ├── favicon.ico
│   ├── index.html
│   ├── karma.conf.js
│   ├── main.ts
│   ├── polyfills.ts
│   ├── styles.scss
│   ├── test.ts
│   ├── tsconfig.app.json
│   ├── tsconfig.spec.json
│   └── tslint.json
├── tsconfig.json
└── tslint.json
````

## checkpoints
* Webpack integration
* ~~S3 integration~~
* ~~Save Content designed from admin dashboard to S3.~~
* ~~Integrate cognito~~
* create a component for conforming user status.
* create a ```Serverless.yml```  to create all aws resources
* Render content from S3 and show in Public landing page.
* Add security to application.
* All other improvements (Themes, preview, different kinds of content, etc).
