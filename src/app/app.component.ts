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


}
