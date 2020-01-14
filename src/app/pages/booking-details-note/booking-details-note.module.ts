import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingDetailsNoteComponent } from './booking-details-note.component';
import{RouterModule} from '@angular/router';

const BOOKING_DETAILS_NOTE= [{path:'',component:BookingDetailsNoteComponent}]

@NgModule({
  declarations: [BookingDetailsNoteComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(BOOKING_DETAILS_NOTE)
  ]
})
export class BookingDetailsNoteModule { }
