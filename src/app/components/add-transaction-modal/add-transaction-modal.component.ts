import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

export type AddTransaction = {
  labelPayment: string;
  partnership: string;
  date: Date;
  amount: string;
}

@Component({
  selector: 'app-add-transaction-modal',
  templateUrl: './add-transaction-modal.component.html',
  styleUrls: ['./add-transaction-modal.component.scss']
})
export class AddTransactionModalComponent implements OnInit {

  labelPaymentControl = new FormControl('', [Validators.required, Validators.minLength(3)]);
  partnershipControl = new FormControl('', [Validators.required, Validators.minLength(3)]);
  amountControl = new FormControl('', [Validators.required]);
  dateControl = new FormControl(new Date(), [Validators.required]);

  constructor(public dialogRef: MatDialogRef<AddTransactionModalComponent>) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  isValidForm(): boolean {
    return this.labelPaymentControl.valid && this.partnershipControl.valid && this.amountControl.valid;
  }

  getAddTransactionData() {
    const addTransactionData: AddTransaction = {
      labelPayment: this.labelPaymentControl.value,
      partnership: this.partnershipControl.value,
      date: this.dateControl.value,
      amount: this.amountControl.value,
    }
    return addTransactionData;
  }

}
