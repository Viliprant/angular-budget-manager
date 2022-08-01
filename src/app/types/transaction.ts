export enum PaymentEnum {
    INCOME = "income",
    OUTCOME = "outcome"
}

export type AddTransaction = {
    labelPayment: string;
    partner: string;
    date: Date;
    amount: number;
    paymentType: PaymentEnum
}

export type Transaction = {
    id: number;
    labelPayment: string;
    partner: string;
    date: Date;
    amount: number;
    paymentType: PaymentEnum
}