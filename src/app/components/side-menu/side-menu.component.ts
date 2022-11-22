import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  marginTop: number = 0;
  width: number = 100;
  skew: number = 0;
  toggleToSearch() {
    //$("#pageSkewer").toggleClass('skewer');
    var searcherIntrv = setInterval(() => {
      if (this.marginTop < 150) {
        $("#pageSkewer").css('margin-top', this.marginTop + 'px');
        this.marginTop = this.marginTop + 2;
      }
      if (this.width < 110) {
        $("#pageSkewer").css('width', this.width + '%');
        this.width = this.width + 1;
      }
      if (this.skew < 70) {
        $("#pageSkewer").css('transform', 'skew(' + this.skew + 'deg,0deg)');
        this.skew = this.skew + 1;
      }
    }, 10);
    $("#pageSkewer").css('position', 'absolute');
    $("#searcherID").css('z-index', '1');
    setTimeout(() => {
      clearInterval(searcherIntrv);
      this.marginTop = 0;
      this.width = 100;
      this.skew = 0;
    }, 3000);
  }
  //////// Navigation Functions /////////
  toDashboard() {
    this.router.navigateByUrl('dashboard');
  }
  toOrders() {
    this.router.navigateByUrl('orders');
    console.log($(location).attr("href"));
  }
  toNewOrder(){
    this.router.navigateByUrl('orders/new');
  }
  toEmployeeListing(){
    this.router.navigateByUrl('employees/workers');
  }
}
