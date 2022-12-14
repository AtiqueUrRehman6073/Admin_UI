import { Component, OnInit } from '@angular/core';

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
    },1500);
  }

}
