import { Component, OnInit } from '@angular/core';

const SAMPLE_BARCHART_DATA: any[]=[
  {data: [65,58,32,34,76,75,76], label:'q3Sales'},
  {data: [23,12,51,78,54,35,76], label:'q4Sales'},
];

const SAMPLE_BARCHART_LABELS: string[]=['W1','W2','W3','W4','W5','W6','W7'];


@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

  constructor() { }

  public barChartData: any[] = SAMPLE_BARCHART_DATA;
  public barChartLabels: string[] = SAMPLE_BARCHART_LABELS;
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartOptions: any ={
    scaleShowVerticalLines: false,
    responsive: true
  }

  ngOnInit() {
  }

}
