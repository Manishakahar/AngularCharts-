import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LineChartComponent } from './component/line-chart/line-chart.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BarchartComponent } from './component/barchart/barchart.component';
import { AreachartComponent } from './component/areachart/areachart.component';
import { PiechartComponent } from './component/piechart/piechart.component';
import { RadarchartComponent } from './component/radarchart/radarchart.component';


@NgModule({
  declarations: [
    AppComponent,
    LineChartComponent,
    BarchartComponent,
    AreachartComponent,
    PiechartComponent,
    RadarchartComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HighchartsChartModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
