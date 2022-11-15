import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  constructor(private router:Router) { }

  loader:boolean = true;
  ngOnInit(): void {
    setTimeout(()=>{
      this.loader = false;
    },1500);
  }
  toDashboard(){
    this.router.navigateByUrl('dashboard');
  }

}
