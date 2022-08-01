export enum PaymentEnum {
    INCOME = "income",
    OUTCOME = "outcome"
}

export type AddTransaction = {
    labelPayment: string;
    partnership: string;
    date: Date;
    amount: number;
    paymentType: PaymentEnum
}

export type Transaction = {
    id: number;
    labelPayment: string;
    partnership: string;
    date: Date;
    amount: number;
    paymentType: PaymentEnum
}