import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.scss']
})
export class PiechartComponent implements OnInit {
  Highcharts: typeof Highcharts = Highcharts;

  constructor() { }

  ngOnInit(): void {
  }
  chartOptions: Highcharts.Options = {
    chart: {
      type: 'pie'
    },
    title: {
      text: 'Browser market shares in January, 2018'
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
   
    plotOptions: {
      pie: {
         allowPointSelect: true,
         cursor: 'pointer',
        dataLabels: {
           format: '<b>{point.name}</b>: {point.percentage:.1f} %',
           connectorColor: 'silver'
        }
      }
    },
    credits: {
      enabled: false
    },
    series: [{
      type: 'pie',
      data: [
        { name: 'Chrome', y: 61.41 },
        { name: 'Internet Explorer', y: 11.84 },
        { name: 'Firefox', y: 10.85 },
        { name: 'Edge', y: 4.67 },
        { name: 'Safari', y: 4.18 },
        { name: 'Other', y: 7.05 }
      ]
    }]

  }

}
