import { Component } from '@angular/core';
import { ChartData, ChartOptions, ChartType, scales } from 'chart.js'

@Component({
  selector: 'app-combo-bar-line-chart',
  templateUrl: './combo-bar-line-chart.component.html',
  styleUrl: './combo-bar-line-chart.component.css'
})
export class ComboBarLineChartComponent {
barChartType: ChartType = 'bar'

chartData: ChartData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      type: 'line',
      label: 'Dataset 1',
      data: [90,12 ,19, 50, 95, 60, 88],
      borderColor: 'rgba(54, 162, 235, 1)', 
      borderWidth: 1.5,
      tension: 0.4,
      borderCapStyle: 'round',
      borderJoinStyle: 'round',
      pointBorderWidth: 2
    },
    {
      type: 'bar',
      label: 'Dataset 2',
      data: [95, 38, 22, 47, 26, 76, 93],
      backgroundColor: 'rgba(255, 99, 132, 1)',
    },
    {
      type: 'bar',
      label: 'Dataset 3',
      data: [13, 5, 95, 20, 38, 12, 65],
      backgroundColor: 'rgba(75, 192, 192, 1)'
    }
  ]
}

chartOptions: ChartOptions = {
  responsive: true,
  maintainAspectRatio: true,
  plugins:{
    title: {
      display: true,
      text: 'Chart.js Combo Bar Line Chart',
      font: {
        size: 11
      }
    },
    legend: {
      labels: {
        font: {
          size: 11
        }
      }
    },
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
      beginAtZero: true,
      min: 0,
      max: 100,
      ticks: {
      font: {
        size: 11
      }
      }
    }
  }
}
}
