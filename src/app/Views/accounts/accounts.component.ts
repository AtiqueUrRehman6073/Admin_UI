import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss']
})
export class AccountsComponent implements OnInit {

  constructor() { }

  loader: boolean = false;
  pwidth: number = 0;
  pInterval: any = '';
  ngOnInit(): void {
    setTimeout(() => {
      this.loader = false;
      clearInterval(this.pInterval);
    }, 3500);
    this.pInterval = setInterval(() => {
      $("#progress-bar").css('width', this.pwidth + '%');
      if (this.pwidth < 100)
        this.pwidth = this.pwidth + 1;
    }, 25);
  }

}
