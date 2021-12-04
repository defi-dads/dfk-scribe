export enum PaymentStatus {
    Pending = 'Pending',
    Paid = 'Paid',
    OverPaid = 'OverPaid',
    TimedOut = 'TimedOut'
}

export interface Payment {
    paymentId: string;
    amountReef: string;
    userId: string,
    merchantId: string,
    status: PaymentStatus,
    created: Date,
}