import { PaymentEnum, Transaction } from "../types/transaction";

export const transactionsMock: Transaction[] = [
    {
        id: 1,
        amount: 70,
        date: new Date(2022, 7, 30),
        labelPayment: 'Happy Birthday',
        partner: 'Eudrey',
        paymentType: PaymentEnum.INCOME
    },
    {
        id: 2,
        amount: 13.40,
        date: new Date(2022, 1, 2),
        labelPayment: 'Burger King',
        partner: 'Jo',
        paymentType: PaymentEnum.INCOME
    },
    {
        id: 3,
        amount: 900,
        date: new Date(2022, 1, 1),
        labelPayment: 'Salary',
        partner: 'Z Compagny',
        paymentType: PaymentEnum.INCOME
    },
    {
        id: 4,
        amount: 28.90,
        date: new Date(2022, 2, 1),
        labelPayment: 'BK',
        partner: 'Burger King',
        paymentType: PaymentEnum.OUTCOME
    },
    {
        id: 5,
        amount: 75,
        date: new Date(2022, 1, 30),
        labelPayment: 'Navigo',
        partner: 'Transport',
        paymentType: PaymentEnum.OUTCOME
    },
    {
        id: 6,
        amount: 75,
        date: new Date(2022, 2, 30),
        labelPayment: 'Navigo',
        partner: 'Transport',
        paymentType: PaymentEnum.OUTCOME
    },
    {
        id: 7,
        amount: 75,
        date: new Date(2022, 3, 30),
        labelPayment: 'Navigo',
        partner: 'Transport',
        paymentType: PaymentEnum.OUTCOME
    },
    {
        id: 8,
        amount: 75,
        date: new Date(2022, 4, 30),
        labelPayment: 'Navigo',
        partner: 'Transport',
        paymentType: PaymentEnum.OUTCOME
    },
    {
        id: 9,
        amount: 75,
        date: new Date(2022, 5, 30),
        labelPayment: 'Navigo',
        partner: 'Transport',
        paymentType: PaymentEnum.OUTCOME
    },
    {
        id: 10,
        amount: 75,
        date: new Date(2022, 6, 30),
        labelPayment: 'Navigo',
        partner: 'Transport',
        paymentType: PaymentEnum.OUTCOME
    },
    {
        id: 11,
        amount: 75,
        date: new Date(2022, 7, 30),
        labelPayment: 'Navigo',
        partner: 'Transport',
        paymentType: PaymentEnum.OUTCOME
    },
    {
        id: 12,
        amount: 900,
        date: new Date(2022, 2, 1),
        labelPayment: 'Salary',
        partner: 'Z Compagny',
        paymentType: PaymentEnum.INCOME
    },
    {
        id: 13,
        amount: 900,
        date: new Date(2022, 3, 1),
        labelPayment: 'Salary',
        partner: 'Z Compagny',
        paymentType: PaymentEnum.INCOME
    },
    {
        id: 14,
        amount: 900,
        date: new Date(2022, 4, 1),
        labelPayment: 'Salary',
        partner: 'Z Compagny',
        paymentType: PaymentEnum.INCOME
    },
    {
        id: 15,
        amount: 900,
        date: new Date(2022, 5, 1),
        labelPayment: 'Salary',
        partner: 'Z Compagny',
        paymentType: PaymentEnum.INCOME
    },
    {
        id: 16,
        amount: 900,
        date: new Date(2022, 6, 1),
        labelPayment: 'Salary',
        partner: 'Z Compagny',
        paymentType: PaymentEnum.INCOME
    },
    {
        id: 17,
        amount: 900,
        date: new Date(2022, 7, 1),
        labelPayment: 'Salary',
        partner: 'Z Compagny',
        paymentType: PaymentEnum.INCOME
    },
    {
        id: 18,
        amount: 900,
        date: new Date(2022, 8, 1),
        labelPayment: 'Salary',
        partner: 'Z Compagny',
        paymentType: PaymentEnum.INCOME
    },
    {
        id: 3,
        amount: 900,
        date: new Date(2022, 1, 1),
        labelPayment: 'Salary',
        partner: 'Z Compagny',
        paymentType: PaymentEnum.INCOME
    },
]