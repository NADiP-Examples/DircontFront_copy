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
import { InviteComponent } from './invite/invite.component'
import { ConfirmChangeEmailComponent } from './confirm-change-email/confirm-change-email.component'

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReCaptchaModule,
    RouterModule,
    TranslateModule
  ],
  declarations: [
    SigninComponent,
    SignupComponent,
    ActivateComponent,
    InviteComponent,
    ResetPassComponent,
    ConfirmResetPassComponent,
    ConfirmChangeEmailComponent
  ]
})
export class AuthModule {
}
