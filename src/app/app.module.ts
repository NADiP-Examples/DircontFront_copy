import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import 'rxjs/Rx'; // Not delete!! It's need for correct work with Observable

import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes'

import { ReCaptchaModule } from 'angular2-recaptcha';

import { AppComponent } from './app.component';
import { CommonComponent } from './common/common.component';
import { SigninComponent } from './auth/signin.component';
import { SignupComponent } from './auth/signup.component';
import { ResetPassComponent } from './auth/resetpass.component';
import { ConfirmResetPassComponent } from './auth/confirm_resetpass.component';
import { NotFoundComponent } from './not-found/not-found.comnponent';
import { ProfileComponent } from './profile/profile.comnponent';
import { ActivateComponent } from './auth/activate.component'
import { AuthService } from './services/auth.service';
import { isLoggedIn, isLoggedOut }   from './services/guard.service';
import { ProfileEditComponent } from './profile/profile-edit/profile-edit.component';
import { ProfileViewComponent } from './profile/profile-view/profile-view.component';


@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    NotFoundComponent,
    CommonComponent,
    ProfileComponent,
    ActivateComponent,
    ResetPassComponent,
    ConfirmResetPassComponent,
    ProfileEditComponent,
    ProfileViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReCaptchaModule,
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
