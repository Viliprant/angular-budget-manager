import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ChartPeriod as ChartPeriodEnum } from 'src/app/types/chart';
import { PaymentEnum } from 'src/app/types/transaction';

export enum BinaryRadioType {
  PAYMENT = 1,
  CHART_PERIOD = 2,
}

@Component({
  selector: 'app-binary-radio',
  templateUrl: './binary-radio.component.html',
  styleUrls: ['./binary-radio.component.scss']
})
export class BinaryRadioComponent implements OnInit {
  @Input() type: BinaryRadioType;
  @Input() selectedValue: any;
  @Output() selectedValueChange = new EventEmitter<any>();

  public BinaryRadioType = BinaryRadioType;
  public PaymentEnum = PaymentEnum;
  public ChartPeriodEnum = ChartPeriodEnum;

  constructor() { }

  ngOnInit(): void {
  }

  onClickRadioButton(newSelectedValue: any) {
    this.selectedValueChange.emit(newSelectedValue);
  }

}
