interface IPaymentCardDetails {
    cardNumber?: string;
    expiryDate?: string;
    accessCode?: string;
    name?: string;
}

interface IBillingAddress {
    address?: string;
    city?: string;
    state?: string;
    zipcode?: string;
}


export interface IPaymentDetails {
    cardDetails?: IPaymentCardDetails;
    billingAddress?: IBillingAddress;
}
