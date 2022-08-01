import { Component, Input } from '@angular/core';
import { PaymentEnum, Transaction } from 'src/app/types/transaction';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss']
})
export class TransactionListComponent {
  @Input() transactions: Transaction[] = [];
  PaymentEnum = PaymentEnum;

  constructor() { }

}
