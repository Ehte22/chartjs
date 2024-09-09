import { Component } from '@angular/core';
import { ChartData, ChartOptions, ChartType } from 'chart.js'

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrl: './line-chart.component.css'
})
export class LineChartComponent {
lineChartType: ChartType = 'line'

lineChartLabels: string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July']

lineChartData: ChartData = {
  labels: this.lineChartLabels,
  datasets: [
    {
      label: 'My First dataset',
      data: [35, 53, 9, 50 , 78, 52, 59],
      tension: 0.4,
      borderCapStyle: 'round',
      borderJoinStyle: 'round'
    },
    {
      label: 'My Second dataset',
      data: [10, 85, 81, 15 , 41, 68, 11],
      tension: 0.4,
      borderCapStyle: 'round',
      borderJoinStyle: 'round'
    }
  ]
}

lineChartOptions: ChartOptions ={
  responsive: true,
  maintainAspectRatio: true,
  plugins: {
    title: {
display: true,
text: 'Chart.js Line Chart',
font: {
  size: 11
}
    },
    legend: {
      labels: {
        font: {
          size: 11
        },
      }
    }
  },
  scales: {
    x: {
      ticks: {
        font: {
          size: 11
        }
      }
    },
    y: {
      beginAtZero:true,
      min: 0,
      max: 100,
      ticks: {
        font: {
          size: 11
        },
        stepSize: 10
      }
    }
  }
}
}
