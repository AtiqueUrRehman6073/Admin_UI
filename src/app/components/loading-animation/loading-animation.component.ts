import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-loading-animation',
  templateUrl: './loading-animation.component.html',
  styleUrls: ['./loading-animation.component.css']
})
export class LoadingAnimationComponent implements OnInit {

  constructor() { }

  length: number = 50;
  iterator: number = 0;
  iterator2: number = 0;
  CPULength: any = [1];
  GPULength: any = [1];
  Ram: any = [1];
  fanSpeed: any = [1];
  ngOnInit(): void {
    setTimeout(() => {
      setInterval(() => {
        {
          
          let i = (Math.random() * 5) % 2;
          let j = (Math.random() * 3) % 2;
          let k = (Math.random() * 6) % 2;
          let l = (Math.random() * 6) % 2;
          if ((i > 0.9 && this.CPULength.length < 19))
            this.CPULength.push(1);
          else if(this.CPULength.length > 1){
            this.CPULength.pop();
          }
          if ((j > 0.9 && this.GPULength.length < 19))
            this.GPULength.push(1);
          else if(this.GPULength.length > 1){
            this.GPULength.pop();
          }
          if ((k > 0.9 && this.Ram.length < 19)){
            this.Ram.push(1);
          }
          else if(this.Ram.length > 1){
            this.Ram.pop();
          }
          if ((l > 0.9 && this.fanSpeed.length < 19)){
            this.fanSpeed.push(1);
          }
          else if(this.fanSpeed.length > 1){
            this.fanSpeed.pop();
          }
          $(".needle2").css('transform','rotate('+(this.Ram.length)+'deg)');
          $(".needle").css('transform','rotate('+(this.GPULength.length)+'deg)');
          console.log(this.Ram.length+Math.round(Math.random())*11);
        }
      }, 250);
    }, 5000);
    $("#clock-container").hide();
    $(".sideArmTopRight").hide();
    setTimeout(() => {
      $("#clock-container").show();
    }, 2000);
    setTimeout(() => {
      this.numberIterator();
      $(".linkerTL").css('opacity', '1');
      $(".linkerTLB").css('opacity', '1');
      $(".linkerTLC").css('opacity', '1');
      $(".sideArmLeft").css('opacity', '1');
      $(".sideArmTopRight").show();
    }, 5000);
  }
  numberIterator() {
    var h = setInterval(() => {
      // if (this.iterator === this.length) {
      //   clearInterval(h);
      // }
      let temp = String(this.iterator);
      if (temp.length === 1) {
        temp = '0' + temp;
      }
      if (parseInt(temp[0]) === 0) {
        $("#a").show();
        $("#b").show();
        $("#c").show();
        $("#d").show();
        $("#e").show();
        $("#f").show();
        $("#g").hide();
      }
      else if (parseInt(temp[0]) === 1) {
        $("#a").hide();
        $("#b").show();
        $("#c").show();
        $("#d").hide();
        $("#e").hide();
        $("#f").hide();
        $("#g").hide();
      }
      else if (parseInt(temp[0]) === 2) {
        $("#a").show();
        $("#b").show();
        $("#c").hide();
        $("#d").show();
        $("#e").show();
        $("#f").hide();
        $("#g").show();
      }
      else if (parseInt(temp[0]) === 3) {
        $("#a").show();
        $("#b").show();
        $("#c").show();
        $("#d").show();
        $("#e").hide();
        $("#f").hide();
        $("#g").show();
      }
      else if (parseInt(temp[0]) === 4) {
        $("#a").hide();
        $("#b").show();
        $("#c").show();
        $("#d").hide();
        $("#e").hide();
        $("#f").show();
        $("#g").show();
      }
      else if (parseInt(temp[0]) === 5) {
        $("#a").show();
        $("#b").hide();
        $("#c").show();
        $("#d").show();
        $("#e").hide();
        $("#f").show();
        $("#g").show();
      }
      else if (parseInt(temp[0]) === 6) {
        $("#a").show();
        $("#b").hide();
        $("#c").show();
        $("#d").show();
        $("#e").show();
        $("#f").show();
        $("#g").show();
      }
      else if (parseInt(temp[0]) === 7) {
        $("#a").show();
        $("#b").show();
        $("#c").show();
        $("#d").hide();
        $("#e").hide();
        $("#f").hide();
        $("#g").hide();
      }
      else if (parseInt(temp[0]) === 8) {
        $("#a").show();
        $("#b").show();
        $("#c").show();
        $("#d").show();
        $("#e").show();
        $("#f").show();
        $("#g").show();
      }
      else if (parseInt(temp[0]) === 9) {
        $("#a").show();
        $("#b").show();
        $("#c").show();
        $("#d").show();
        $("#e").hide();
        $("#f").show();
        $("#g").show();
      }
      if (parseInt(temp[1]) === 0) {
        $("#a1").show();
        $("#b1").show();
        $("#c1").show();
        $("#d1").show();
        $("#e1").show();
        $("#f1").show();
        $("#g1").hide();
      }
      else if (parseInt(temp[1]) === 1) {
        $("#a1").hide();
        $("#b1").show();
        $("#c1").show();
        $("#d1").hide();
        $("#e1").hide();
        $("#f1").hide();
        $("#g1").hide();
      }
      else if (parseInt(temp[1]) === 2) {
        $("#a1").show();
        $("#b1").show();
        $("#c1").hide();
        $("#d1").show();
        $("#e1").show();
        $("#f1").hide();
        $("#g1").show();
      }
      else if (parseInt(temp[1]) === 3) {
        $("#a1").show();
        $("#b1").show();
        $("#c1").show();
        $("#d1").show();
        $("#e1").hide();
        $("#f1").hide();
        $("#g1").show();
      }
      else if (parseInt(temp[1]) === 4) {
        $("#a1").hide();
        $("#b1").show();
        $("#c1").show();
        $("#d1").hide();
        $("#e1").hide();
        $("#f1").show();
        $("#g1").show();
      }
      else if (parseInt(temp[1]) === 5) {
        $("#a1").show();
        $("#b1").hide();
        $("#c1").show();
        $("#d1").show();
        $("#e1").hide();
        $("#f1").show();
        $("#g1").show();
      }
      else if (parseInt(temp[1]) === 6) {
        $("#a1").show();
        $("#b1").hide();
        $("#c1").show();
        $("#d1").show();
        $("#e1").show();
        $("#f1").show();
        $("#g1").show();
      }
      else if (parseInt(temp[1]) === 7) {
        $("#a1").show();
        $("#b1").show();
        $("#c1").show();
        $("#d1").hide();
        $("#e1").hide();
        $("#f1").hide();
        $("#g1").hide();
      }
      else if (parseInt(temp[1]) === 8) {
        $("#a1").show();
        $("#b1").show();
        $("#c1").show();
        $("#d1").show();
        $("#e1").show();
        $("#f1").show();
        $("#g1").show();
      }
      else if (parseInt(temp[1]) === 9) {
        $("#a1").show();
        $("#b1").show();
        $("#c1").show();
        $("#d1").show();
        $("#e1").hide();
        $("#f1").show();
        $("#g1").show();
      }
      this.iterator = this.Ram.length +20;
    }, 75);
  }

}
