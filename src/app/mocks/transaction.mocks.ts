import { PaymentEnum, Transaction } from "../types/transaction";

export const transactionsMock: Transaction[] = [
    {
        id: 1,
        amount: 70,
        date: new Date(),
        labelPayment: 'Happy Birthday',
        partner: 'Eudrey',
        paymentType: PaymentEnum.INCOME
    },
    {
        id: 2,
        amount: 13.40,
        date: new Date(),
        labelPayment: 'Burger King',
        partner: 'Jo',
        paymentType: PaymentEnum.INCOME
    },
    {
        id: 3,
        amount: 900,
        date: new Date(),
        labelPayment: 'Salary',
        partner: 'Jo',
        paymentType: PaymentEnum.INCOME
    },
    {
        id: 4,
        amount: 28.90,
        date: new Date(),
        labelPayment: 'BK',
        partner: 'Burger King',
        paymentType: PaymentEnum.OUTCOME
    },
    {
        id: 5,
        amount: 75,
        date: new Date(),
        labelPayment: 'Navigo',
        partner: 'Transport',
        paymentType: PaymentEnum.OUTCOME
    }
]