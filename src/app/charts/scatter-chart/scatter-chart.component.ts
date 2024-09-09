import { Component } from '@angular/core';
import { ChartData, ChartOptions, ChartType } from 'chart.js'

@Component({
  selector: 'app-scatter-chart',
  templateUrl: './scatter-chart.component.html',
  styleUrl: './scatter-chart.component.css'
})
export class ScatterChartComponent {
scatterCharType: ChartType = 'scatter'

scatterChartOptions: ChartOptions = {
responsive:true, 
maintainAspectRatio: true,
plugins: {
  title: {
  display: true,
  text: 'Chart.js Scatter Chart',
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
  }
},
scales: {
  x :{
    beginAtZero: true,
    min: 0,
    max: 100,
    ticks: {
      display: true,
      font: {
        size: 11
      },
      stepSize: 10,
      callback: (value) => value.toString()
    }
  },
  y :{
    beginAtZero: true,
    min: 0,
    max: 100,
    ticks: {
      display: true,
      font: {
        size: 11
      },
      stepSize: 10,
      callback: (value) => value.toString()
    }
  },
  
}
}

scatterChartData: ChartData ={
  datasets: [
    {
      data: [{x:9, y:25}, {x:19, y:2}, {x:36, y:68}, {x:45, y:10},{x:45, y:25}, {x:47, y:45},{x:88, y:98}],
      label: 'My First datset',
      borderWidth:2
    },
    {
      data: [{x:10, y:40}, {x:22, y:62}, {x:38, y:4}, {x:55, y:82},{x:94, y:25}],
      label: 'My Second datset',
      borderWidth:2
    },

  ]
}
}
