import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { AuthModule } from './auth/auth.module';

import 'rxjs/Rx'; // Not delete!! It's need for correct work with Observable

import { appRoutes } from './app.routes'

import { AppComponent } from './app.component';
import { CommonComponent } from './common/common.component';
import { NotFoundComponent } from './not-found/not-found.comnponent';
import { ProfileComponent } from './profile/profile.comnponent';
import { ProfileEditComponent } from './profile/profile-edit/profile-edit.component';
import { ProfileViewComponent } from './profile/profile-view/profile-view.component';

import { AuthService } from './services/auth.service';
import { isLoggedIn, isLoggedOut }   from './services/guard.service';


@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    CommonComponent,
    ProfileComponent,
    ProfileEditComponent,
    ProfileViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AuthModule,
    SimpleNotificationsModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    NgbModule.forRoot()
  ],
  providers: [
    AuthService,
    isLoggedIn,
    isLoggedOut
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
