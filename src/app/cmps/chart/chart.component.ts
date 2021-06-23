import { Component, Input, OnInit } from '@angular/core';
import { ChartType } from 'angular-google-charts';

@Component({
  selector: 'chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  @Input() chartData: any
  @Input() num: number
  constructor() { }
  
  chart = {
    title: '',
    type: ChartType.AreaChart,
    data: [['']],
    options: {
      colors: ['#cfaa01'],
    }
  }

 ngOnInit(): void {
    this.chart.title = this.chartData.name
    const data = this.chartData.values.map((value: any) => {
      return [new Date(value.x * 1000), value.y]
    })
    data.sort(function (a: any, b: any) { return a[0] - b[0] });
    this.chart.data = data;
  }
}
