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
├── angular.json
├── e2e
│   ├── protractor.conf.js
│   ├── src
│   │   ├── app.e2e-spec.ts
│   │   └── app.po.ts
│   └── tsconfig.e2e.json
├── LICENSE
├── package.json
├── package-lock.json
├── README.md
├── src
│   ├── app
│   │   ├── admin
│   │   │   ├── admin.module.spec.ts
│   │   │   ├── admin.module.ts
│   │   │   ├── admin-routing.module.ts
│   │   │   └── dashboard
│   │   │       ├── dashboard.component.html
│   │   │       ├── dashboard.component.scss
│   │   │       ├── dashboard.component.spec.ts
│   │   │       └── dashboard.component.ts
│   │   ├── app.component.html
│   │   ├── app.component.scss
│   │   ├── app.component.spec.ts
│   │   ├── app.component.ts
│   │   ├── app.module.ts
│   │   ├── app-routing.module.ts
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
│   │   └── public
│   │       ├── landing-page
│   │       │   ├── landing-page.component.html
│   │       │   ├── landing-page.component.scss
│   │       │   ├── landing-page.component.spec.ts
│   │       │   └── landing-page.component.ts
│   │       ├── public.module.spec.ts
│   │       ├── public.module.ts
│   │       └── public-routing.module.ts
│   ├── assets
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
* S3 integration
* Save Content designed from admin dashboard to S3.
* Render content from S3 and show in Public landing page.
* Add security to application.
* All other improvements (Themes, preview, different kinds of content, etc).
