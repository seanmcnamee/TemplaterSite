# TemplaterSite

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.1.4.

Steps for creation:
- Create Angular application with `ng new TemplaterSite`
    - Use Angular Routing
    - Use SCSS
- `cd TemplaterSite`
- Add linting with `ng add @angular-eslint/schematics`
	- (answer Y)
- Add e2e testing with `ng add @cypress/schematic`
	- (answer Y)
	- (answer Y)
- Test e2e testing with `ng TemplaterSite:cypress-run`
    - Modify `spec.cy.ts` test (remove one of the 'contains' tests)
- Test linting with `ng lint`
- Edit `karma.conf.js` near the bottom to look as follows:
```
autoWatch: true,
    browsers: ['Chrome', 'ChromeHeadlessCI'],
    customLaunchers: {
      ChromeHeadlessCI: {
        base: 'ChromeHeadless',
        flags: ['--no-sandbox']
      }
    },
    singleRun: false,
```
- Test CI tests with `npm test -- --no-watch --no-progress --browsers=ChromeHeadlessCI`
    - You may have to `<CTRL>+C` to break
- Add GitHub pages with `npm install angular-cli-ghpages --save-dev`
- Make sure repo is committed to GitHub




## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
