import {Component, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {TransactionService} from 'src/app/services/transaction.service';
import {Transaction} from 'src/app/types/transaction';

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.scss']
})
export class IncomePage implements OnInit {
  public incomes: Transaction[];
  private subscriptions: Subscription[] = [];

  constructor(public transactionService: TransactionService) {
  }

  ngOnInit(): void {
    this.subscriptions.push(this.transactionService.getIncomes().subscribe(incomes => {
      this.incomes = incomes;
    }))
  }

  ngOnDestroy(): void {
    this.subscriptions.map(subscription => subscription.unsubscribe());
  }
}
