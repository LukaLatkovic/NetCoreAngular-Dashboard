import { Component, OnInit } from '@angular/core';
import {LINE_CHART_COLLORS} from '../../shared/chart.colors';
 
const SAMPLE_LINE_CHART_DATA: any[]=[
  {data: [65,58,32,34,76,75,76], label:'Sentiment'},
  {data: [23,122,51,78,54,39,76], label:'Image'},
  {data: [23,12,51,78,90,35,76], label:'Forecasting'},
];

const SAMPLE_LineCHART_LABELS: string[]=['W1','W2','W3','W4','W5','W6','W7'];



@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  constructor() { }

  lineChartData = SAMPLE_LINE_CHART_DATA;
  lineChartLabels =  SAMPLE_LineCHART_LABELS;
  lineChartOptions: any = {
    responsive: true
  };

  lineChartLegend: true;
  lineChartType = 'line';
  lineChartColors = LINE_CHART_COLLORS;
  ngOnInit() {
  }

}
