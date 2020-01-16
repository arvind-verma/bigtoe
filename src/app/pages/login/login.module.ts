import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {ReactiveFormsModule} from '@angular/forms';
import {LoginComponent} from "./login.component";
import { SocialLoginModule, AuthServiceConfig, FacebookLoginProvider } from 'angularx-social-login';

const LOGIN_ROUTE = [{path: '', component: LoginComponent}];

const config = new AuthServiceConfig([
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider('759373477875534')
  }
]);

export function provideConfig() {
  return config;
}


@NgModule({
  declarations: [LoginComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        //CookieService,
        RouterModule.forChild(LOGIN_ROUTE),
        SocialLoginModule
    ],
    providers: [
      {
        provide: AuthServiceConfig,
        useFactory: provideConfig
      }
    ]
})
export class LoginModule { }
