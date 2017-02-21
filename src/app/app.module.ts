import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import 'rxjs/Rx'; // Not delete!! It's need for correct work with Observable

import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes'

import { ReCaptchaModule } from '../../node_modules/angular2-recaptcha';

import { AppComponent } from './app.component';
import { CommonComponent } from './common/common.component';
import { SigninComponent } from './auth/signin.component';
import { SignupComponent } from './auth/signup.component';
import { NotFoundComponent } from './not-found/not-found.comnponent';
import { ProfileComponent } from './profile/profile.comnponent';
import { ConfirmComponent } from './auth/confirm.component';
import { AuthService } from './services/auth.service';
import { isLoggedIn, isLoggedOut, isUserInactive, isUserActive }   from './services/guard.service';


@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    NotFoundComponent,
    CommonComponent,
    ProfileComponent,
    ConfirmComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReCaptchaModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AuthService,
    isLoggedIn,
    isLoggedOut,
    isUserInactive,
    isUserActive
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
