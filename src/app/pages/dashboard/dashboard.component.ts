import {Component, OnInit} from '@angular/core';
import {TransactionService} from '../../services/transaction.service';
import {Transaction} from '../../types/transaction';

interface DashboardItems {
  icon: string;
  label: string;
  value: any;
  style?: string;
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

  constructor(public transactionService: TransactionService) {
  }

  public ngOnInit(): void {
    this.setWelcomingText();
    this.setTransaction();
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
    this.transactionService.transactions$
      .subscribe((transactions: Transaction[]) => {
        if (!transactions) {
          return;
        }
        this.transactions = transactions;
        this.setDashboardItems();
      })
  }

  private setDashboardItems() {
    this.dashboardItems = [
      {icon: 'wallet', label: 'Your bank account', value: '5000$'},
      {icon: 'expand_circle_down', label: 'Incomes', value: 6},
      {icon: 'expand_circle_down', label: 'Outcomes', value: 2, style: 'transform: rotate(180deg)'},
      {icon: 'swap_vert', label: 'Total Transaction', value: this.transactions.length},
    ]
  }
}
