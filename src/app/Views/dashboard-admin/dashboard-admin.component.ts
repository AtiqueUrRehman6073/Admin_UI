import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.css']
})
export class DashboardAdminComponent implements OnInit {
  loader:boolean;
  showFiller:boolean;
  constructor() {
    this.loader = true;
    this.showFiller = false;
   }
  ngOnInit(): void {
    setTimeout(()=>{
      this.loader = false;
      $("#scanner").hide();
    },1500);
  }
  marginTop: number = 150;
  width: number = 110;
  skew: number = 70;
  closeSearcher(){
    var closeIntrv = setInterval(() => {
      if (this.marginTop > 0) {
        $("#pageSkewer").css('margin-top', this.marginTop + 'px');
        this.marginTop = this.marginTop - 2;
      }
      if (this.width > 100) {
        $("#pageSkewer").css('width', this.width + '%');
        this.width = this.width - 1;
      }
      if (this.skew > 0) {
        $("#pageSkewer").css('transform', 'skew(' + this.skew + 'deg,0deg)');
        this.skew = this.skew - 1;
      }
    }, 10);
    $("#pageSkewer").css('position', 'initial');
    $("#searcherID").css('z-index', '-1');
    setTimeout(()=>{
      clearInterval(closeIntrv);
      this.marginTop = 150;
      this.width = 110;
      this.skew = 70;
    },3000);
  }
  searchContent(){
    $("#searchInput").hide();
    $("#searcherID").css('background','rgba(67, 84, 110, 0.786)');
    $("#scanner").show();
  }

}
