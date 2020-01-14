import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {ReactiveFormsModule} from '@angular/forms';
import {LoginComponent} from "./login.component";

const LOGIN_ROUTE = [{path: '', component: LoginComponent}];

@NgModule({
  declarations: [LoginComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        //CookieService,
        RouterModule.forChild(LOGIN_ROUTE)
    ]
})
export class LoginModule { }
