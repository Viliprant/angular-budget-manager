import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TransactionService } from 'src/app/transaction.service';
import { AddTransaction } from 'src/app/types/transaction';
import { AddTransactionModalComponent } from '../add-transaction-modal/add-transaction-modal.component';
import { Link, Links } from './Links';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  private links: Link[] = Links;

  constructor(
    public dialog: MatDialog,
    private transactionService: TransactionService
  ) { }

  ngOnInit(): void {
  }

  get homePage(): Link | undefined {
    return this.links.find((link: Link) => link.name === 'Home');
  }

  get otherPages(): Link[] {
    return this.links.filter((link: Link) => link.name !== 'Home');
  }

  openDialog(): void {
    const addTransactionModal = this.dialog.open(AddTransactionModalComponent, {
      width: "500px",
    });

    addTransactionModal.afterClosed().subscribe((addTransaction: AddTransaction) => {
      if (addTransaction) {
        this.transactionService.addTransaction(addTransaction);
      }
    })
  }

}
