import { Component } from '@angular/core';
import { ChartData, ChartOptions, ChartType } from 'chart.js'

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrl: './doughnut-chart.component.css'
})
export class DoughnutChartComponent {
doughnutChartType: ChartType = 'doughnut'

doughnutChartData: ChartData = {
  labels: ['blue', 'red', 'orange', 'yellow', 'green'],
  datasets: [
  {
    data: [40, 10 ,5 , 40 ,10]
  }
  ]
}

doughnutChartOptions: ChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    title: {
      display: true,
      text: 'Chart.js Doughnut Chart',
      font: {
        size: 11
      }
    },
    legend: {
      labels: {
        font: {
          size:11
        },
        boxWidth: 30 
      }
    }
  },
  
} 


}
