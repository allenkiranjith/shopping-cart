import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentRoutingModule } from './payment-routing.module';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';

@NgModule({
  imports: [
    CommonModule,
    PaymentRoutingModule
  ],
  declarations: [PaymentDetailsComponent]
})
export class PaymentModule { }
