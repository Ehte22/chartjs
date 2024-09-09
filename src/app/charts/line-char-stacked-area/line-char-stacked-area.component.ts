import { Component } from '@angular/core';
import { ChartData, ChartOptions, ChartType } from 'chart.js';

@Component({
  selector: 'app-line-char-stacked-area',
  templateUrl: './line-char-stacked-area.component.html',
  styleUrl: './line-char-stacked-area.component.css'
})
export class LineCharStackedAreaComponent {
chartType: ChartType = 'line'

chartData: ChartData ={
   labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
   datasets: [
    {
      label: 'My First dataset',
      data: [0, 10, 50, 40, 90, 50, 40],
      backgroundColor: 'rgba(255, 99, 132, 1)',
      borderColor: 'rgba(255, 99, 132, 1)',
      fill: 'start',
      tension: 0.4,
      borderCapStyle: 'round',
      borderJoinStyle: 'round',
    },
    {
      label: 'My Second dataset',
      data: [70, 25, 50, 60, 100, 70, 110],
      backgroundColor: 'rgba(54, 162, 235, 1)',
      borderColor: 'rgba(54, 162, 235, 1)',
      fill: 'start', 
      tension: 0.4,
      borderCapStyle: 'round',
      borderJoinStyle: 'round',
    },
    {
      label: 'My Third dataset',
      data: [90, 40, 150, 110, 100, 90, 180],
      backgroundColor: 'rgba(75, 192, 192, 1)',
      borderColor: 'rgba(75, 192, 192, 1)',
      fill: 'start', 
      tension: 0.4,
      borderCapStyle: 'round',
      borderJoinStyle: 'round',
    },
    {
      label: 'My Fourth dataset',
      data: [130, 90, 250, 220, 125, 120, 275],
      backgroundColor: 'rgba(255, 206, 86, 1)',
      borderColor: 'rgba(255, 206, 86, 1)',
      fill: 'start', 
      tension: 0.4,
      borderCapStyle: 'round',
      borderJoinStyle: 'round',

    }
   ]
}

chartOptions: ChartOptions ={
  responsive: true,
  maintainAspectRatio: true,
  plugins: {
    title: {
      display: true,
      text: 'Chart.js Line Chart - Stacked Area',
      font: {
        size: 11
      }
    },
    legend: {
      labels: {
        boxWidth: 25,
        boxHeight: 8,
        font: {size: 10}
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
      beginAtZero: true,
      min: 0,
      max: 300,
      ticks: {
        stepSize: 100,
        font: {
          size: 11
        }
      }
    }
  }
}
}
