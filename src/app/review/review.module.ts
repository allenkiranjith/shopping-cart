import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReviewRoutingModule } from './review-routing.module';
import { ReviewDetailsComponent } from './review-details/review-details.component';

@NgModule({
  imports: [
    CommonModule,
    ReviewRoutingModule
  ],
  declarations: [ReviewDetailsComponent]
})
export class ReviewModule { }
