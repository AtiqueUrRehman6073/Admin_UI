import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { HttpClient } from '@angular/common/http';
import { AnyTxtRecord } from 'dns';


declare var require: any;
let Boost = require('highcharts/modules/boost');
let noData = require('highcharts/modules/no-data-to-display');
let More = require('highcharts/highcharts-more');

Boost(Highcharts);
noData(Highcharts);
More(Highcharts);
noData(Highcharts);

@Component({
  selector: 'app-highchart-graphs',
  templateUrl: './highchart-graphs.component.html',
  styleUrls: ['./highchart-graphs.component.css']
})
export class HighchartGraphsComponent implements OnInit {

  constructor() { }
  ngOnInit() {}
  highcharts = Highcharts;
  chartOptions = {   
     chart: {
        type: "spline"
     },
     title: {
        text: "Monthly Average Sales"
     },
     subtitle: {
        text: "Company: Mangla Foods"
     },
     xAxis:{
        categories:["Jan", "Feb", "Mar", "Apr", "May", "Jun",
           "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
     },
     yAxis: {          
        title:{
           text:"Bottles (N)"
        } 
     },
     tooltip: {
        valueSuffix:" Bottles"
     },
     series: [
        {
           name: '19 Ltr',
           data: [170, 169, 195, 245, 382, 715, 552,265, 433, 383, 239, 196],
           type: "spline"
        },
        {
           name: '6 Ltr',
           data: [102, 108, 157, 113, 170, 420, 348,341, 301, 241, 186, 125],
           type: "spline"
        },
        {
           name: '1.5 Ltr',
           data: [409, 306, 435, 284, 335, 532, 286, 179, 243, 390, 139, 210],
           type: "spline"
        },
        {
           name: '500 ml',
           data: [439, 442, 457, 685, 319, 752, 670, 566, 342, 403, 366, 448],
           type: "spline"
        }
     ] as Highcharts.SeriesOptionsType[]
  };
}