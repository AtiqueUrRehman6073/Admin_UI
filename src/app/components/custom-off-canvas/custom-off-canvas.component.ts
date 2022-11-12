import { Component, OnInit, Input } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-custom-off-canvas',
  templateUrl: './custom-off-canvas.component.html',
  styleUrls: ['./custom-off-canvas.component.css']
})
export class CustomOffCanvasComponent implements OnInit {

  constructor() { }

  @Input() width:number = 0;
  
  ngOnInit(): void {
    $("#offCanvasContainer").hide();
  }
  showOffCanvas(){
    $("#offCanvasContainer").show();
  }
  closeOffCanvas(){
    $("#offCanvasContainer").hide();
  }

}
