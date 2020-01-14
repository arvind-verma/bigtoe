import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingDetailsDirectionsComponent } from './booking-details-directions.component';
import{RouterModule} from '@angular/router';

const BOOKING_DETAILS_DIRECTIONS=[{path:'',component:BookingDetailsDirectionsComponent}];


@NgModule({
  declarations: [BookingDetailsDirectionsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(BOOKING_DETAILS_DIRECTIONS)
  ]
})
export class BookingDetailsDirectionsModule { }
