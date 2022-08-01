import { PaymentEnum, Transaction } from "../types/transaction";

export const transactionsMock: Transaction[] = [
    {
        id: 1,
        amount: 12,
        date: new Date(),
        labelPayment: 'test',
        partnership: 'Eudrey',
        paymentType: PaymentEnum.INCOME
    },
    {
        id: 2,
        amount: 100,
        date: new Date(),
        labelPayment: 'test',
        partnership: 'Eudrey',
        paymentType: PaymentEnum.INCOME
    }
]