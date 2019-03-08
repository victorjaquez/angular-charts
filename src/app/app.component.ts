import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Chart } from 'chart.js';
import { Data } from './Data'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'angular-charts';
  data: Data[]; // 
  url = 'http://localhost:4000/results';
  month = [];
  price = [];
  chart = [];
  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    this.httpClient.get(this.url).subscribe((res: Data[]) => {
      res.forEach(x => {
        this.month.push(x.month);
        this.price.push(x.month);
      });
      this.chart = new Chart('canvas', {
        type: 'line',
        data: {
          labels: this.month,
          datasets: [
            {
              data: this.price,
              borderColor: '#3cba9f',
              fill: false
            }
          ]
        },
        options: {
          legend: {
            display: false;
          },
          scales: {
            xAxes: [{
              display: true
            }]
          }
        }
      });
    });
  }

}
