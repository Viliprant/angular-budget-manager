import { CurrencyPipe } from '@angular/common';
import { Component, OnInit, Pipe } from '@angular/core';
import { Subscription, timer } from 'rxjs';
import { TransactionService } from '../../services/transaction.service';
import { PaymentEnum, Transaction } from '../../types/transaction';

interface DashboardItems {
  icon: string;
  label: string;
  value: any;
  style?: string;
  colorClass?: string;
  currencyPipe?: boolean;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public welcomeText: string;
  public transactions: Transaction[];
  public dashboardItems: DashboardItems[];
  public time: Date = new Date();
  private subscriptions: Subscription[] = [];

  constructor(public transactionService: TransactionService) {
  }

  public ngOnInit(): void {
    this.setWelcomingText();
    this.setTransaction();
    this.setTime();
  }

  private setWelcomingText(): void {
    const today = new Date();
    const currentHour = +today.toString().split(' ')[4].split(':')[0];
    this.welcomeText = this.getWelcomingText(currentHour);
  }

  private getWelcomingText(hour: number): string {
    if (hour > 16) {
      return 'Good evening';
    } else if (hour > 12) {
      return 'Good afternoon';
    } else if (hour > 8) {
      return 'Good morning';
    } else {
      return 'You need to sleep';
    }
  }

  private setTransaction() {
    this.transactionService.getTransactions()
      .subscribe((transactions: Transaction[]) => {
        if (!transactions) {
          return;
        }
        this.transactions = transactions;
        this.setDashboardItems();
      })
  }

  private setDashboardItems() {
    const wallet: number = this.transactions.reduce((prev, curr) => {
      if (curr.paymentType == PaymentEnum.INCOME) return prev + curr.amount;
      if (curr.paymentType == PaymentEnum.OUTCOME) return prev - curr.amount;

      throw new Error("Something wrong with paymentType");
    }, 0)
    const incomesCount: number = this.transactions.filter(transaction => transaction.paymentType == PaymentEnum.INCOME).length;
    const outcomesCount: number = this.transactions.filter(transaction => transaction.paymentType == PaymentEnum.OUTCOME).length;

    this.dashboardItems = [
      { icon: 'wallet', label: 'Your bank account', value: wallet, colorClass: wallet > 0 ? "success" : "error", currencyPipe: true },
      { icon: 'expand_circle_down', label: 'Incomes', value: incomesCount, colorClass: "success" },
      { icon: 'expand_circle_down', label: 'Outcomes', value: outcomesCount, style: 'transform: rotate(180deg)', colorClass: "error" },
      { icon: 'swap_vert', label: 'Total Transaction', value: this.transactions.length },
    ]
  }

  private setTime() {
    const source = timer(0, 60000);

    this.subscriptions.push(source.subscribe(_ => {
      this.time = new Date();
    }));
  }

  ngOnDestroy(): void {
    this.subscriptions.map(subscription => subscription.unsubscribe());
  }
}
