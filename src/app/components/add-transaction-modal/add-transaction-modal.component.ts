import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { AddTransaction, PaymentEnum } from 'src/app/types/transaction';

@Component({
  selector: 'app-add-transaction-modal',
  templateUrl: './add-transaction-modal.component.html',
  styleUrls: ['./add-transaction-modal.component.scss']
})
export class AddTransactionModalComponent implements OnInit {

  public PaymentEnum = PaymentEnum;

  public transactionForm = new FormGroup(
    {
      labelPaymentControl: new FormControl('', [Validators.required, Validators.minLength(3)]),
      partnershipControl: new FormControl('', [Validators.required, Validators.minLength(3)]),
      amountControl: new FormControl('', [Validators.required]),
      dateControl: new FormControl(new Date(), [Validators.required]),
    }
  );
  public currentPaymentType = PaymentEnum.INCOME;

  constructor(public dialogRef: MatDialogRef<AddTransactionModalComponent>) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  getAddTransactionData() {
    const addTransactionData: AddTransaction = {
      labelPayment: this.transactionForm.get('labelPaymentControl').value,
      partnership: this.transactionForm.get('partnershipControl').value,
      date: this.transactionForm.get('dateControl').value,
      amount: this.transactionForm.get('amountControl').value,
      paymentType: this.currentPaymentType,
    }
    return addTransactionData;
  }

}
