import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TransactionService } from 'src/app/transaction.service';
import { Transaction } from 'src/app/types/transaction';

@Component({
  selector: 'app-outcome',
  templateUrl: './outcome.component.html',
  styleUrls: ['./outcome.component.scss']
})
export class OutcomePage implements OnInit {
  public outcomes: Transaction[];
  private subscriptions: Subscription[] = [];

  constructor(public transactionService: TransactionService) { }

  ngOnInit(): void {
    this.subscriptions.push(this.transactionService.getOutcomes().subscribe(outcomes => {
      this.outcomes = outcomes;
    }))
  }

  ngOnDestroy(): void {
    this.subscriptions.map(subscription => subscription.unsubscribe());
  }

}
