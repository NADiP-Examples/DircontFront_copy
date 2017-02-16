import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes'

import { AppComponent } from './app.component';
import { CommonComponent } from './common/common.component';
import { SigninComponent } from './auth/signin.component';
import { SignupComponent } from './auth/signup.component';
import { NotFoundComponent } from './not-found/not-found.comnponent';
import { ProfileComponent } from './profile/profile.comnponent';


@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    NotFoundComponent,
    CommonComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
