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
  loader2: boolean = true;
  maximizer: boolean = false;
  pwidth: number = 0;
  iterator: number = 0;
  iterator2: number = 1;
  iterator3: number = 1;
  iterator4: number = 1;
  i: number = 0;
  systemText: string = '';
  systemText2: string = 'INITIATING JARVIS OPERATING SYSTEM . . .';
  systemtext3: Array<string> = [];
  pInterval: any = '';
  pInterval2: any = '';
  pInterval3: any = '';
  pInterval4: any = '';
  tempInterval: any = '';
  widthChecker: number = 1890;
  windowWidth: number = 19.5;
  subtractorCheck: number = 0;
  rightCheck:number = 20.65;
  shape3W:number = 4;
  shape6W:number = 48;
  boxWidth:number = 20;
  ngOnInit(): void {
    console.log(window.innerWidth);
    setTimeout(() => {
      if(window.innerWidth < 1500){
        this.systemText2 = 'INITIATING JARVIS OS . . .';
      }
      while (this.widthChecker > 1000) {
        if (this.subtractorCheck === 30) {
          this.subtractorCheck = 0;
          this.windowWidth = this.windowWidth - 0.385;
          this.shape3W = this.shape3W - 0.025;
          this.rightCheck = this.rightCheck - 0.3499;
          this.boxWidth = this.boxWidth - 0.655;
          this.shape6W = this.shape6W - 0.599;
        }
        console.clear();
        console.log(this.windowWidth);
        if (window.innerWidth === this.widthChecker) {
          $("#shape4").css('width', this.windowWidth + '%');
          $("#shape3").css('width', this.shape3W + '%');
          $("#shape3").css('right', this.rightCheck + '%');
          $(".col-1").css('width', this.boxWidth + 'px');
          $("#shape6").css('width', this.shape6W + '%');
          $("#shape7").css('width', '20.5%');
          console.log('broken');
          break;
        }
        this.subtractorCheck++;
        this.widthChecker--;
      }
      // if (window.innerWidth < 1500 && window.innerWidth > 1200){
      //     $("#shape3").css('right','16%');
      //     $("#shape4").css('width','14.5%');
      //   }
    }, 100);
    this.systemtext3[0] = 'Analyzing Login Activity . . .';
    this.systemtext3[1] = 'Analyzing System Files . . .';
    this.systemtext3[2] = 'Retreiving Work Backup . . .';
    this.systemtext3[3] = 'Loading System Files . . .';
    this.systemtext3[4] = 'Analyzing Last Log Off . . .';
    this.systemtext3[5] = 'Loading Complete !';
    setTimeout(() => {
      while (this.iterator4 < 66) {
        $("#box-" + this.iterator4).hide();
        this.iterator4++;
      }
    }, 100);
    if (this.iterator2 == 65)
      this.iterator2 = 1;
    $('body').css('background-color', '#000000');
    $('body').css('overflow', 'hidden');
    this.pInterval = setInterval(() => {
      $("#progress-bar").css('width', this.pwidth + '%');
      if (this.pwidth < 100)
        this.pwidth = this.pwidth + 1;
    }, 25);
    this.pInterval2 = setInterval(() => {
      this.systemText = this.systemText + this.systemText2[this.iterator];
      this.iterator++;
      if (this.iterator == this.systemText2.length)
        clearInterval(this.pInterval2);
    }, 150);
    setTimeout(() => {
      this.loader = false;
      clearInterval(this.pInterval);
      clearInterval(this.tempInterval);
    }, 3500);
    setTimeout(() => {
      this.iterator3 = 0;
      this.pInterval3 = setInterval(() => {
        $("#box-" + this.iterator3).fadeIn(250);
        this.iterator3++;
        if (this.iterator3 > 65)
          clearInterval(this.pInterval3);
      }, 80);
    }, 7500);
    setTimeout(() => {
      let j = 0;
      this.pInterval4 = setInterval(() => {
        this.tempInterval = setInterval(() => {
          $('#statText').append(this.systemtext3[this.i][j]);
          j++;
          if (j >= this.systemtext3[this.i].length) {
            clearInterval(this.tempInterval);
            j = 0;
            this.i++;
            $('#statText').append('<p>');
          }
        }, 30);
        $("#statText").animate({ scrollTop: $('#statText').height() }, 500);
        if (this.i >= 5) {
          clearInterval(this.pInterval4);
          $('#statText').append('<h2 style="font-family:Rockwell !important;font-size:12pt !important">CHECKSUM OK</h2>');
        }
      }, 950);
    }, 500);
    setTimeout(() => {
      this.loader2 = true;
    }, 15000);

  }

  maximize(id: any) {
    if (this.maximizer) {
      $("#" + id).css('width', '40%');
      $("#" + id).css('height', '50vh');
      $("#" + id).css('top', '25%');
      $("#" + id).css('left', '30%');
      $("#leftmenu").css('opacity', '1');
      $("#rightmenu").css('opacity', '1');
      $("#date_time").css('opacity', '1');
      $("#date").css('opacity', '1');
      $("#time").css('opacity', '1');
      $("#particle2").css('opacity', '1');
      $("#ccp1").css('opacity', '1');
      $("#ccp2").css('opacity', '1');
    }
    else {
      $("#" + id).css('width', '100%');
      $("#" + id).css('height', '100vh');
      $("#" + id).css('top', '0%');
      $("#" + id).css('left', '0%');
      $("#leftmenu").css('opacity', '0.02');
      $("#rightmenu").css('opacity', '0.02');
      $("#date_time").css('opacity', '0.02');
      $("#date").css('opacity', '0.02');
      $("#particle2").css('opacity', '0.02');
      $("#ccp1").css('opacity', '0.02');
      $("#ccp2").css('opacity', '0.02');
    }
    this.maximizer = !this.maximizer;
  }
  closeWindow(id: any) {
    $("#" + id).hide(150);
  }
}
