import { Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { Chart, ChartConfiguration, ChartData, LinearScale, LineController, LineElement, PointElement, CategoryScale, ChartDataset } from 'chart.js';
import { ChartPeriod, period } from 'src/app/types/chart';
import { BinaryRadioType } from '../binary-radio/binary-radio.component';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit, OnChanges {
  @Input() public datasets: ChartDataset[];
  @Output() public periodChange = new EventEmitter<ChartPeriod>();
  public ChartPeriod = ChartPeriod;
  public period: ChartPeriod = ChartPeriod.MONTHLY;
  public chart: Chart;
  public BinaryRadioType = BinaryRadioType;
  @ViewChild("chart") private chartRef: ElementRef<HTMLCanvasElement>;

  constructor() { }

  public ngOnInit(): void {
    Chart.register(LineController, LineElement, PointElement, LinearScale, CategoryScale);
  }

  public ngAfterViewInit(): void {
    this.setChart();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['datasets'] && this.chart) {
      this.chart.data.datasets = this.datasets;
      this.chart.update();
    }
  }

  public changePeriod(newChartPeriod: ChartPeriod) {
    this.period = newChartPeriod;
    this.chart.data.labels = this.getLabelPeriod();
    this.chart.update();
    this.periodChange.emit(this.period);
  }

  private setChart() {
    const config = this.getConfigChart();

    this.chart = new Chart(
      this.chartRef.nativeElement,
      config
    );
  }

  private getLabelPeriod() {
    if (this.period == ChartPeriod.MONTHLY) return period.monthly;
    if (this.period == ChartPeriod.YEARLY) return period.yearly;

    throw new Error('Something wrong with selectedPeriod');
  }

  private getConfigChart(): ChartConfiguration {
    const labels = this.getLabelPeriod();
    const data: ChartData = {
      labels: labels,
      datasets: this.datasets
    };
    const config: ChartConfiguration = {
      type: 'line',
      data: data,
      options: {}
    };

    return config;
  }
}