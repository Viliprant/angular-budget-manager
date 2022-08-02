import { Component, OnInit } from '@angular/core';
import { ChartDataset } from 'chart.js';
import { Subscription, timer } from 'rxjs';
import { ChartPeriod, period } from 'src/app/types/chart';
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
  public incomes: Transaction[];
  public outcomes: Transaction[];

  // CHART DATA
  public periodChart: ChartPeriod = ChartPeriod.MONTHLY;
  public chartDatasets: ChartDataset[];

  private subscriptions: Subscription[] = [];

  constructor(public transactionService: TransactionService) {
  }

  public ngOnInit(): void {
    this.setWelcomingText();
    this.setTransaction();
    this.setTime();
    this.setChartData();
  }

  public periodChanged(newChartPeriod: ChartPeriod) {
    this.periodChart = newChartPeriod;
    this.chartDatasets = [];
    this.SetIncomesData();
    this.SetOutcomesData();
  }

  private setChartData() {
    this.chartDatasets = [];
    this.subscriptions.push(this.transactionService.getIncomes().subscribe(incomes => {
      this.incomes = incomes;
      this.SetIncomesData();

    }));
    this.subscriptions.push(this.transactionService.getOutcomes().subscribe(outcomes => {
      this.outcomes = outcomes;
      this.SetOutcomesData();
    }));
  }

  private SetIncomesData() {
    this.chartDatasets.push({
      label: 'Incomes',
      backgroundColor: '#4caf50',
      borderColor: '#4caf50',
      data: this.splitByPeriod(this.incomes),
    })
  }

  private SetOutcomesData() {
    this.chartDatasets.push({
      label: 'Outcomes',
      backgroundColor: '#ff5722',
      borderColor: '#ff5722',
      data: this.splitByPeriod(this.outcomes),
    });
  }

  private splitByPeriod(transactions: Transaction[]): number[] {
    const now = this.periodChart == ChartPeriod.MONTHLY ? new Date().getMonth() : new Date().getFullYear();
    const newChartData: number[] = [];
    const currentPeriod = this.periodChart == ChartPeriod.MONTHLY ? period.monthly : period.yearly;

    for (let enumMember in currentPeriod) {
      if (currentPeriod.indexOf(currentPeriod[enumMember]) <= now - 1) {
        const totalByPeriod = transactions
          .filter((transaction) => {
            const getMonthOrYear = this.periodChart == ChartPeriod.MONTHLY ? period.monthly[transaction.date.getMonth() - 1] : transaction.date.getFullYear();

            if (this.periodChart == ChartPeriod.MONTHLY) {
              return getMonthOrYear.toString() == currentPeriod[enumMember]
                && transaction.date.getFullYear() == new Date().getFullYear()
            }
            else {
              return getMonthOrYear.toString() == currentPeriod[enumMember];
            }
          })
          .reduce((prev, curr) => prev + curr.amount, 0);

        newChartData.push(totalByPeriod);
      }
    }

    return newChartData;
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
