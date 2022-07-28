import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddTransactionModalComponent } from '../add-transaction-modal/add-transaction-modal.component';
import { Link, Links } from './Links';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  private links: Link[] = Links;

  constructor(public dialog: MatDialog) { }

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
      disableClose: true
    });

    addTransactionModal.afterClosed().subscribe(result => {
      if (result) {
        //TODO: ADD transaction
        console.log(result);
      }
    })
  }

}
