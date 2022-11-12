import { Component, OnInit, Input } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-custom-modals',
  templateUrl: './custom-modals.component.html',
  styleUrls: ['./custom-modals.component.css']
})
export class CustomModalsComponent implements OnInit {

  constructor() { }

  @Input() width:number = 0;
  @Input() data:any = null;
  ngOnInit(): void {
    $("#modalContainer").hide();
  }
  showModal(){
    $("#modalContainer").show();
  }
  closeModal(){
    $("#modalContainer").hide();
  }
}
