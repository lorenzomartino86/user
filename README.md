# USER project

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.1.

## Running a Development server

In order to mock backend I've chosen to use a JSON server that needs to be installed with following command:
``
   npm install -g json-server
``

Then run the server
``
   json-server --watch  src/app/mock-backend/users.json
``

Navigate to `http://localhost:3000/users` to check the list of users stored by mocked backend service.

Finally Run `ng serve` for a dev server. Navigate to `http://localhost:4200/register`. 

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

