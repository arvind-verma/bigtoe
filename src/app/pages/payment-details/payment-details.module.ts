import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import { PaymentDetailsComponent } from './payment-details.component';

const PAYMENT_DETAIL = [{path:'',component:PaymentDetailsComponent}]

@NgModule({
  declarations: [PaymentDetailsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(PAYMENT_DETAIL)
  ]
})
export class PaymentDetailsModule { }
