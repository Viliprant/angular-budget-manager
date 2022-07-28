export enum PaymentEnum {
    INCOME = "income",
    OUTCOME = "outcome"
}

export type AddTransaction = {
    labelPayment: string;
    partnership: string;
    date: Date;
    amount: string;
    paymentType: PaymentEnum
}