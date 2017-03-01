# DircontFront

##Install
1. Install nvm:
  * sudo curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.31.0/install.sh | bash
  * source ~/.bashrc
2. Install node 7.5:
  * nvm install 7.5
  * nvm use 7.5
  * nvm alias default node
3. Install angular-cli:
  * npm install -g @angular/cli
  
## Install dependencies 
`npm install`

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Settings Environments
Настройки для локальной разработки в файле: `environments/environment.ts`  
Для тестового сервера: `environments/environment.stage.ts`  
Для продакшина: `environments/environment.prod.ts`  

## Build/Deployment
### For Stage-server
1. `git checkout develop` - develop ветка для STAGE
2. `git pull origin develop`
3. `npm install` - скачивание зависимостей
4. `ng build --env=stage` - сборка для STAGE сервера в папку `dist/`  

### For Prod-server
1. `git checkout master` - master ветка для PROD
2. `git pull origin master`
3. `npm install` - скачивание зависимостей
4. `ng build --env=prod` - сборка для PROD в папку `dist/`

## Running unit tests(тесты временно отключены)

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests(тесты временно отключены)
Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Code scaffolding
Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Further help
To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
