import { Component } from '@angular/core';
import {Chart, ChartData, ChartOptions, ChartType, registerables } from "chart.js"

Chart.register(...registerables)

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrl: './bar-chart.component.css'
})
export class BarChartComponent {
barChartType: ChartType = 'bar'

barChartOptions: ChartOptions = {
responsive: true,
maintainAspectRatio: true,
plugins:{
  title: {
    display: true,
    text: 'Chart.js Bar Chart',
    font: {
      size: 11
    }
  },
  legend: {
    labels: {
      font: {
        size:11
      }
    }
  }
},
scales: {
  x:{
  ticks: {
    font:{
      size: 11
    }
  }
  },
  y: {
    beginAtZero: true,
    min: 0,
    max: 100,
    ticks: {
      display: true,
      font:{
        size: 11
      },
      stepSize: 10,
      callback: (value) => value.toString(),
    },
  }
}
}

barChartLabels: string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July']

barChartData: ChartData<'bar'> = {
  labels: this.barChartLabels,
  datasets: [
    {
      data: [11, 15, 10, 65, 50, 70, 35],
      label: 'Dataset 1',   
    },
    {
      data: [45, 5, 1, 90, 1, 15, 50],
      label: 'Dataset 2',
    }
  ]
}


}
