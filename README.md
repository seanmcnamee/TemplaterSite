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
- Make sure `ng build` is working
- Test out `ng deploy --base-href=/TemplaterSite/ --name='GH Actions Deployment' --email=seanmcnamee.45@gmail.com`
- Edit package.json to include the tests and deployment
```
    "test:ci": "npm test -- --no-watch --no-progress --browsers=ChromeHeadlessCI",
    "e2e:cypress:ci": "ng run TemplaterSite:cypress-run",
    "deploy": "ng deploy --base-href=/TemplaterSite/ --name='GH Actions Deployment' --email=seanmcnamee.45@gmail.com"
```
- Make CI for GH Actions
```
# Continuous integration for Angular
name: Angular GitHub CI Tests

# Controls when the workflow will run
on:
  # Triggers the workflow on pull request event for the main branch
  pull_request:
    branches: [ main ]
jobs:
   build-and-deploy:
     runs-on: ubuntu-latest
     
     steps: 
      - name: Checkout
        uses: actions/checkout@v2
      
      - name: Use Node.js 14.x
        uses: actions/setup-node@v1
        with:
          node-version: 14.x

      - name: Setup
        run: npm ci

      - name: Lint
        run:
          npm run lint

      - name: Unit Test with Karma
        run:
          npm run test:ci

      - name: End-To-End Test with Cypress
        run:
          npm run e2e:cypress:ci
```
- Make CD for GH Actions
```
# Continuous integration for Angular
name: Angular GitHub CI/CD

# Controls when the workflow will run
on:
  # Triggers the workflow on push to main branch
  push:
    branches: [ main ]
jobs:
   build-and-deploy:
     runs-on: ubuntu-latest
     
     steps: 
      - name: Checkout
        uses: actions/checkout@v2
      
      - name: Use Node.js 14.x
        uses: actions/setup-node@v1
        with:
          node-version: 14.x

      - name: Setup
        run: npm ci

      - name: Lint
        run:
          npm run lint

      - name: Unit Test with Karma
        run:
          npm run test:ci

      - name: End-To-End Test with Cypress
        run:
          npm run e2e:cypress:ci

      - name: Conventional Changelog Action
        id: changelog
        uses: TriPSs/conventional-changelog-action@v3
        with:
          github-token: ${{ secrets.SEAN_ACCESS_TOKEN }}
          output-file: "false"

      - name: Create Release
        uses: actions/create-release@v1
        if: ${{ steps.changelog.outputs.skipped == 'false' }}
        env:
          GITHUB_TOKEN: ${{ secrets.SEAN_ACCESS_TOKEN }}
        with:
          tag_name: ${{ steps.changelog.outputs.tag }}
          release_name: ${{ steps.changelog.outputs.tag }}
          body: ${{ steps.changelog.outputs.clean_changelog }}

      - name: Deploy
        env:
         GH_TOKEN: ${{ secrets.SEAN_ACCESS_TOKEN }}
        run:
          npm run deploy
```
- Create Access Token (for public repos)
    - User Settings > Developer Settings > Personal access tokens > Generate new token
	    - Select all repo scopes
	    - Generate token
	    - Copy value
- Add Secret to repo
    - Settings > Secrets > Actions > New repository secret
        - Paste value from personal access token
	    - Name: SEAN_ACCESS_TOKEN
- Add bootstrap (SCSS) with `npm install bootstrap --save`
    - Add `@import "~bootstrap/dist/css/bootstrap.css";` to styles.scss


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
