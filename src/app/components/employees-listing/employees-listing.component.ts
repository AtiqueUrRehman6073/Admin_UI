import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employees-listing',
  templateUrl: './employees-listing.component.html',
  styleUrls: ['./employees-listing.component.css']
})
export class EmployeesListingComponent implements OnInit {

  constructor() { }

  canvasWidth:number = 400;
  content: any = '';
  iterator: number = 0;
  intervalId: any;
  temp: any = 'You are welcome to the software, It was developed in Angular 14 with nearly all available at the time . . .';
  ngOnInit(): void {
    setTimeout(()=>{
      $("#offCanvasContainer").hide();
    },50);
    this.intervalId = setInterval(() => {
      this.content = this.content + this.temp[this.iterator];
      this.iterator = this.iterator + 1;
      if (this.iterator === this.temp.length)
        clearInterval(this.intervalId);
    },150);
  }
  showCustomOffCanvas(){
    $("#offCanvasContainer").show();
  }

}
