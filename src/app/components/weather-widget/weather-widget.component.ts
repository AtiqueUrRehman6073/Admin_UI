import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-weather-widget',
  templateUrl: './weather-widget.component.html',
  styleUrls: ['./weather-widget.component.scss']
})
export class WeatherWidgetComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  closeWidget(){
    $("#fader").toggleClass('fadeInUp');
    $("#fader").toggleClass('fadeOut');
  }

}
