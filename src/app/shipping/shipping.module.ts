import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShippingRoutingModule } from './shipping-routing.module';
import { ShippingDetailsComponent } from './shipping-details/shipping-details.component';
import { ShippingAddressComponent } from './shipping-details/shipping-address/shipping-address.component';
import { ShippingContactDetailsComponent } from './shipping-details/shipping-contact-details/shipping-contact-details.component';

@NgModule({
  imports: [
    CommonModule,
    ShippingRoutingModule
  ],
  declarations: [ShippingDetailsComponent, ShippingAddressComponent, ShippingContactDetailsComponent]
})
export class ShippingModule { }
