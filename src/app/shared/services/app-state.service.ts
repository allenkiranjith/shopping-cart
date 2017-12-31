import { Injectable } from '@angular/core';
import { IAppState } from '../modals/IAppState';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { IShippingDetails } from '../modals/IShippingDetails';
import { IPaymentDetails } from '../modals/IPaymentDetails';

@Injectable()
export class AppStateService {

  private _appState: IAppState;

  constructor() {
    this._appState = {
      shippingDetails: new BehaviorSubject<IShippingDetails>(null),
      paymentDetails: new BehaviorSubject<IPaymentDetails>(null)
    };
   }

   updateShippingDetails(shippingDetails: IShippingDetails) {
     this._appState.shippingDetails.next(shippingDetails);
   }


   updatePaymentDetails(paymentDetails: IPaymentDetails) {
    this._appState.paymentDetails.next(paymentDetails);
  }
}
