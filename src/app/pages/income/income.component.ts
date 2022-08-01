import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { TransactionService } from 'src/app/transaction.service';
import { Transaction } from 'src/app/types/transaction';

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.scss']
})
export class IncomePage implements OnInit {

  subscriptions: Subscription[] = [];
  incomes: Transaction[];

  constructor(public transactionService: TransactionService) { }

  ngOnInit(): void {
    this.subscriptions.push(this.transactionService.getincomes().subscribe(incomes => {
      this.incomes = incomes;
    }))
  }

  ngOnDestroy(): void {
    this.subscriptions.map(subscription => subscription.unsubscribe());
  }
}
