import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { TranslateModule } from 'ng2-translate';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { EqualValidator } from './shared/directives/equal-validator.directive';

// Custom Modules
import { AuthModule } from './auth/auth.module';
import { PersonalDataModule } from './personal-data/personal-data.module'
import { ProfileModule } from './profile/profile.module'
import { SharedModule } from 'app/shared/shared.module'
import { EmployeesModule } from 'app/employees/employees.module'
import { FileSharingModule } from 'app/file-sharing/file-sharing.module'
import { DesignDemoModule } from 'app/design-demo/design-demo.module'

import 'rxjs/Rx'; // Not delete!! It's need for correct work with Observable

import { appRoutes } from './app.routes'

import { AppComponent } from './app.component';
import { DashboardLayoutComponent } from './shared/layout_components/dashboard_layout/dashboard_layout.component';
import { NotFoundComponent } from './not-found/not-found.comnponent';

import { AuthService } from './shared/services/auth.service';
import { isLoggedIn, isLoggedOut, isHasId, isNotBlocked }   from './shared/services/guard.service';


@NgModule({
  // Классы представлений(views): компоненты(components), директивы(directives), каналы(pipes)
  declarations: [
    AppComponent,
    NotFoundComponent,
    DashboardLayoutComponent,
    EqualValidator,
  ],
  // Набор классов представлений, которые должны использоваться в шаблонах компонентов из других модулей
  exports: [],
  // Другие модули, классы которых необходимы для шаблонов компонентов из текущего модуля
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AuthModule,
    PersonalDataModule,
    ProfileModule,
    SharedModule,
    EmployeesModule,
    FileSharingModule,
    DesignDemoModule,
    TranslateModule.forRoot(),
    SimpleNotificationsModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    NgbModule.forRoot()
  ],
  // Классы, создающие сервисы, используемые модулем
  providers: [
    AuthService,
    isLoggedIn,
    isLoggedOut,
    isHasId,
    isNotBlocked
  ],
  // Корневой компонент, который вызывается по умолчанию при загрузке приложения
  bootstrap: [AppComponent]
})
export class AppModule {
}
