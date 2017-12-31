interface IShippingAddress {
    address?: string;
    city?: string;
    state?: string;
    zipcode?: string;
}

interface IShippingContact {
    name?: string;
    phone?: string;
    email?: string;
}

export interface IShippingDetails {
    shippingAddress: IShippingAddress;
    shippingContact: IShippingContact;
}
