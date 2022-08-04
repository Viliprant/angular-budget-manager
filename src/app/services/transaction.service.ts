import { Injectable } from '@angular/core';
import { transactionsMock } from '../mocks/transaction.mocks';
import { AddTransaction, PaymentEnum, Transaction } from '../types/transaction';
import { BehaviorSubject, Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  private transactions$: BehaviorSubject<Transaction[]> = new BehaviorSubject(transactionsMock);
  private increment: number = transactionsMock.length + 1 || 1;

  constructor() { }

  get transactions() {
    return this.transactions$.value.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }

  get wallet(): number {
    return this.transactions.reduce((prev, curr) => {
      if (curr.paymentType == PaymentEnum.INCOME) return prev + curr.amount;
      if (curr.paymentType == PaymentEnum.OUTCOME) return prev - curr.amount;

      throw new Error("Something wrong with paymentType");
    }, 0)
  }

  get incomeCount(): number {
    return this.transactions.filter(transaction => transaction.paymentType == PaymentEnum.INCOME).length;
  }

  get outcomeCount(): number {
    return this.transactions.filter(transaction => transaction.paymentType == PaymentEnum.OUTCOME).length;
  }

  addTransaction(newAddTransaction: AddTransaction): void {
    const newTransaction: Transaction = {
      id: this.increment++,
      ...newAddTransaction
    }

    this.transactions$.next([...this.transactions, newTransaction])
  }


  getTransactions(): Observable<Transaction[]> {
    return this.transactions$.pipe(
      map(transactions => transactions.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()))
    );
  }

  getIncomes(): Observable<Transaction[]> {
    return this.transactions$.pipe(
      map(transactions => transactions.filter(transaction => transaction.paymentType == PaymentEnum.INCOME).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()))
    );
  }

  getOutcomes(): Observable<Transaction[]> {
    return this.transactions$.pipe(
      map(transactions => transactions.filter(transaction => transaction.paymentType == PaymentEnum.OUTCOME).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()))
    );
  }
}
