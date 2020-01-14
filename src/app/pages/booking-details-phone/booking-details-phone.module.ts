import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingDetailsPhoneComponent } from './booking-details-phone.component';
import { RouterModule } from "@angular/router";

const BOOKING_DETAILS_PHONE = [{ path: '', component: BookingDetailsPhoneComponent }];

@NgModule({
  declarations: [BookingDetailsPhoneComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(BOOKING_DETAILS_PHONE)
  ]
})
export class BookingDetailsPhoneModule { }
