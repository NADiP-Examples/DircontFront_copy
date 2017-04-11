import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ReCaptchaModule } from 'angular2-recaptcha';
import { TranslateModule } from 'ng2-translate';

import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { ResetPassComponent } from './resetpass/resetpass.component';
import { ConfirmResetPassComponent } from './confirm_resetpass/confirm_resetpass.component';
import { ActivateComponent } from './activate/activate.component'
import { ConfirmChangeEmailComponent } from './confirm-change-email/confirm-change-email.component'

import { authRoutes }   from './auth.routes';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReCaptchaModule,
    RouterModule.forChild(authRoutes),
    TranslateModule
  ],
  declarations: [
    SigninComponent,
    SignupComponent,
    ActivateComponent,
    ResetPassComponent,
    ConfirmResetPassComponent,
    ConfirmChangeEmailComponent
  ]
})
export class AuthModule {
}
