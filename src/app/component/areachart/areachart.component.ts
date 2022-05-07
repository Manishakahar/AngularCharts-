import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-areachart',
  templateUrl: './areachart.component.html',
  styleUrls: ['./areachart.component.scss']
})
export class AreachartComponent implements OnInit {
  Highcharts: typeof Highcharts = Highcharts;

  constructor() { }

  ngOnInit(): void {
  }
  chartOptions: Highcharts.Options = {

    chart: {
      type: 'Area'
    },
    title: {
      text: 'Average fruit consumption during one week'
    },
    subtitle: {
      style: {
        position: 'absolute',
        right: '0px',
        bottom: '10px'
      }
    },
    legend: {
      layout: 'vertical',
      align: 'left',
      verticalAlign: 'middle',
      x: -150,
      y: 100,
      
    },
    xAxis: {
      categories: ['Monday', 'Tuesday', 'Wednesday', 'Thursday',
        'Friday', 'Saturday', 'Sunday']
    },
    yAxis: {
      title: {
        text: 'Number of units'
      }
    },
    tooltip: {
      shared: true, valueSuffix: ' units'
    },
    plotOptions: {
      area: {
        fillOpacity: 0.7
      }
    },
    credits: {
      enabled: false
    },
    series: [
      {
        type: 'area',
        data: [3, 4, 3, 5, 4, 10, 12]
      },
      {
        type: 'area',
        data: [1, 7, 4, 5, 3, 5, 4]
      }
    ]
  };
}


