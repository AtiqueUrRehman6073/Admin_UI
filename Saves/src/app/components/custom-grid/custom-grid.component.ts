import { Component, OnInit } from '@angular/core';
import Handsontable from 'handsontable';
import { registerAllModules } from 'handsontable/registry';


@Component({
  selector: 'app-custom-grid',
  templateUrl: './custom-grid.component.html',
  styleUrls: ['./custom-grid.component.css']
})
export class CustomGridComponent implements OnInit {

  constructor() { }

  dataset: any = [];
  ngOnInit(): void {
    this.dataset = [
      {id: 1, name: 'Ted Right', address: 'Wall Street'},
      {id: 2, name: 'Frank Honest', address: 'Pennsylvania Avenue'},
      {id: 3, name: 'Joan Well', address: 'Broadway'},
      {id: 4, name: 'Gail Polite', address: 'Bourbon Street'},
      {id: 5, name: 'Michael Fair', address: 'Lombard Street'},
      {id: 6, name: 'Mia Fair', address: 'Rodeo Drive'},
      {id: 7, name: 'Cora Fair', address: 'Sunset Boulevard'},
      {id: 8, name: 'Jack Right', address: 'Michigan Avenue'},
    ];
  }
  container:any = null;
  hot:Handsontable = new Handsontable(this.container,{
    data: this.dataset,
    colHeaders: true,
    rowHeaders: true,
    filters: true,
    dropdownMenu: true
  });
}
