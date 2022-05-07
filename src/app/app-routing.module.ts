import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarchartComponent } from './component/barchart/barchart.component';
import { LineChartComponent } from './component/line-chart/line-chart.component';
import { AreachartComponent } from './component/areachart/areachart.component';
import { PiechartComponent } from './component/piechart/piechart.component';
import { RadarchartComponent } from './component/radarchart/radarchart.component';

const routes: Routes = [
  {path: 'linechart', component: LineChartComponent},
  {path:'barchart',component: BarchartComponent},
  {path: 'areachart',component:AreachartComponent},
  {path: 'piechart', component:PiechartComponent},
  {path:'radarchart',component:RadarchartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
