import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {ReactiveFormsModule} from '@angular/forms';
import {RegisterComponent} from "./register.component";

const LOGIN_ROUTE = [{path: '', component: RegisterComponent}];
@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(LOGIN_ROUTE)
  ]
})
export class RegisterModule { }
