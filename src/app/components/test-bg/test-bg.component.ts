import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-bg',
  templateUrl: './test-bg.component.html',
  styleUrls: ['./test-bg.component.css']
})
export class TestBGComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  toggler(){
    $("#pageID").toggleClass('skewer');
  }
}
