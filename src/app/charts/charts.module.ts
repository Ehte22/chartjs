import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartsRoutingModule } from './charts-routing.module';
import { ChartsComponent } from './charts.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { ScatterChartComponent } from './scatter-chart/scatter-chart.component';
import { DoughnutChartComponent } from './doughnut-chart/doughnut-chart.component';
import { BaseChartDirective } from 'ng2-charts';
import { ComboBarLineChartComponent } from './combo-bar-line-chart/combo-bar-line-chart.component';
import { LineCharStackedAreaComponent } from './line-char-stacked-area/line-char-stacked-area.component';


@NgModule({
  declarations: [
    ChartsComponent,
    PieChartComponent,
    BarChartComponent,
    LineChartComponent,
    ScatterChartComponent,
    DoughnutChartComponent,
    ComboBarLineChartComponent,
    LineCharStackedAreaComponent
  ],
  imports: [
    CommonModule,
    ChartsRoutingModule,
 BaseChartDirective
  ]
})
export class ChartsModule { }
