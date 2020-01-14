import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingDetailsComponent } from './booking-details.component';
import {RouterModule} from "@angular/router";

const LOGIN_ROUTE = [{path: '', component: BookingDetailsComponent}];

@NgModule({
  declarations: [BookingDetailsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(LOGIN_ROUTE)
  ]
})
export class BookingDetailsModule { }
