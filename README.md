# BodylessCMS

BodylessCMS doesn't require any kind of Backend or database or any kind of third party api's, but can provide content management and scalability to any extent. The main objective of this project to cut down infrastructure cost and complexity of CMS. We already has a concept of [HeadlessCMS](https://en.wikipedia.org/wiki/Headless_CMS), which has plain user interface to serve content from third party api's. That requires reliable third party to store our content and cost for content management and for security of data. In BodylessCMS you just need AWS s3 to serve content and to manage website. Security has no issues, reliable and scalable to any extinct.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Folder structure

````.
.
├── LICENSE
├── README.md
├── angular.json
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
│   │   │   └── signup
│   │   │       ├── signup.component.html
│   │   │       ├── signup.component.scss
│   │   │       ├── signup.component.spec.ts
│   │   │       └── signup.component.ts
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
│   │   ├── components
│   │   │   └── webpage-builder
│   │   │       └── webpage-builder.component.ts
│   │   ├── landing-page
│   │   │   ├── landing-page.component.html
│   │   │   ├── landing-page.component.scss
│   │   │   ├── landing-page.component.spec.ts
│   │   │   └── landing-page.component.ts
│   │   ├── page-not-found
│   │   │   ├── page-not-found.component.html
│   │   │   ├── page-not-found.component.scss
│   │   │   ├── page-not-found.component.spec.ts
│   │   │   └── page-not-found.component.ts
│   │   ├── public
│   │   │   ├── landing-page
│   │   │   │   ├── landing-page.component.html
│   │   │   │   ├── landing-page.component.scss
│   │   │   │   ├── landing-page.component.spec.ts
│   │   │   │   └── landing-page.component.ts
│   │   │   ├── public-routing.module.ts
│   │   │   ├── public.module.spec.ts
│   │   │   └── public.module.ts
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
├── tree.txt
├── tsconfig.json
└── tslint.json

````

## checkpoints
* Webpack integration
* S3 integration
* Save Content designed from admin dashboard to S3.
* Render content from S3 and show in Public landing page.
* Add security to application.
* All other improvements (Themes, preview, different kinds of content, etc).
