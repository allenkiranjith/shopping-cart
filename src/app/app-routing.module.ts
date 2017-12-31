import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
{path:'', pathMatch: 'full', component: DashboardComponent},
{ path: 'shipping', loadChildren: 'app/shipping/shipping.module#ShippingModule' },
{ path: 'payment', loadChildren: 'app/payment/payment.module#PaymentModule' },
{ path: 'review', loadChildren: 'app/review/review.module#ReviewModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
