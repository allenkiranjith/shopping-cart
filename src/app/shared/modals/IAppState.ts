import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { IShippingDetails } from './IShippingDetails';
import { IPaymentDetails } from './IPaymentDetails';

export interface IAppState {
    shippingDetails: BehaviorSubject<IShippingDetails>;
    paymentDetails: BehaviorSubject<IPaymentDetails>;
}
