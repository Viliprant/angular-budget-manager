import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PaymentEnum } from 'src/app/types/transaction';

@Component({
  selector: 'app-binary-radio',
  templateUrl: './binary-radio.component.html',
  styleUrls: ['./binary-radio.component.scss']
})
export class BinaryRadioComponent implements OnInit {

  @Input() paymentValue: PaymentEnum;
  @Output() paymentValueChange = new EventEmitter<PaymentEnum>();

  PaymentEnum = PaymentEnum;

  constructor() { }

  ngOnInit(): void {
  }

  onPaymentType(newPaymentType: PaymentEnum) {
    this.paymentValueChange.emit(newPaymentType);
  }

}
