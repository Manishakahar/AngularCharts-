import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit {
  Highcharts: typeof Highcharts = Highcharts;
  constructor() { }

  chartOptions: Highcharts.Options = {
    title: {
      text: ' Employment Growth by Sector, 2010-2014'
    },

    subtitle: {
      text: 'Source: thesolarfoundation.com'
    },

    yAxis: {
      title: {
        text: 'Number of Employees'
      }
    },

    xAxis: {
      accessibility: {
        rangeDescription: 'Range: 2010 to 2014'
      }
    },

    legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'middle'
    },
    credits: {
      enabled: false
    },
    plotOptions: {
      series: {
        pointStart: 2010
      }
    },
    series: [
      {
        type: "line",
        data: [10, 20, 30, 40, 50]
      }
    ]
  };
  ngOnInit(): void {
  }
}
