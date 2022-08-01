import { Injectable } from '@angular/core';
import { transactionsMock } from './mocks/transaction.mocks';
import { AddTransaction, PaymentEnum, Transaction } from './types/transaction';
import { BehaviorSubject, Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  transactions$: BehaviorSubject<Transaction[]> = new BehaviorSubject(transactionsMock);
  increment: number = transactionsMock.length + 1 || 1;

  constructor() { }

  addTransaction(newAddTransaction: AddTransaction): void {
    const newTransaction: Transaction = {
      id: this.increment++,
      ...newAddTransaction
    }

    this.transactions$.next([...this.transactions, newTransaction])
  }

  get transactions() {
    return this.transactions$.value;
  }

  getIncomes(): Observable<Transaction[]> {
    return this.transactions$.pipe(
      map(transactions => transactions.filter(transaction => transaction.paymentType == PaymentEnum.INCOME))
    );
  }

  getOutcomes(): Observable<Transaction[]> {
    return this.transactions$.pipe(
      map(transactions => transactions.filter(transaction => transaction.paymentType == PaymentEnum.OUTCOME))
    );
  }
}
