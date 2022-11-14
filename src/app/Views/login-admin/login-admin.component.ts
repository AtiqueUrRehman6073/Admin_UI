import { Component, OnInit } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material/core';
import { FormGroupDirective, FormControl, NgForm, Validators } from '@angular/forms';
import * as $ from 'jquery';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}


@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {

  constructor(private router: Router, private toastr: ToastrService) { }

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  passwordFormControl = new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9]+$'), Validators.minLength(8)]);

  matcherEmail = new MyErrorStateMatcher();
  matcherPass = new MyErrorStateMatcher();

  width: number = 0;
  height: number = 0;
  borderRadius: number = 0;
  marginTop: number = 100;
  opacity: number = 1;
  marginLeft: number = 275;
  widthB: number = 0;
  heightB: number = 0;
  borderRadiusB: number = 0;
  marginTopB: number = 650;
  opacityB: number = 1;
  marginLeftB: number = 1500;
  widthC: number = 0;
  heightC: number = 0;
  borderRadiusC: number = 0;
  marginTopC: number = 150;
  opacityC: number = 1;
  marginLeftC: number = 1600;
  widthD: number = 0;
  heightD: number = 0;
  borderRadiusD: number = 0;
  marginTopD: number = 650;
  opacityD: number = 1;
  marginLeftD: number = 350;
  interval1: any;
  interval2: any;
  interval3: any;
  interval4: any;
  ngOnInit(): void {
    $('#bubble').hide();
    $('#bubbleB').hide();
    $('#bubbleC').hide();
    $('#bubbleD').hide();
  }
  userAuth() {
    window.clearInterval(this.interval1);
    window.clearInterval(this.interval2);
    window.clearInterval(this.interval3);
    window.clearInterval(this.interval4);
    if (this.passwordFormControl.hasError('required') || this.emailFormControl.hasError('required')) {
      $("#loginCard").addClass('shaker');
      setTimeout(() => {
        $("#loginCard").removeClass('shaker');
      }, 500);
      this.bubble();
      this.bubbleB();
      this.bubbleC();
      this.bubbleD();
      this.toastr.warning('Please enter correct email and password (8 Characters or more)')
    }
    else {
      $('#bubble').hide();
      $('#bubbleB').hide();
      $('#bubbleC').hide();
      $('#bubbleD').hide();
      this.router.navigateByUrl('dashboard');
    }
  }
  bubbleInterval: any;
  bubble() {
    $('#bubble').show();
    this.interval1 = setInterval(() => {
      $('#bubble').css('width', this.width);
      $('#bubble').css('height', this.height);
      $('#bubble').css('opacity', this.opacity);
      $('#bubble').css('border-radius', this.borderRadius);
      $('#bubble').css('margin-top', this.marginTop);
      $('#bubble').css('margin-left', this.marginLeft);
      this.width = this.width + 1;
      this.height = this.height + 1;
      this.borderRadius = this.borderRadius + 1;
      this.marginTop = this.marginTop - 0.75;
      this.marginLeft = this.marginLeft - 0.15;
      this.opacity = this.opacity - 0.001;
    }, 2);
    setInterval(() => {
      if (this.opacity < 0.001) {
        this.opacity = 1;
        this.width = 100;
        this.height = 100;
        this.marginTop = 50;
        this.marginLeft = 275;
        this.borderRadius = 50;
      }
    }, 2);
  }
  bubbleB() {
    $('#bubbleB').show();
    this.interval2 = setInterval(() => {
      $('#bubbleB').css('width', this.widthB);
      $('#bubbleB').css('height', this.heightB);
      $('#bubbleB').css('opacity', this.opacityB);
      $('#bubbleB').css('border-radius', this.borderRadiusB);
      $('#bubbleB').css('margin-top', this.marginTopB);
      $('#bubbleB').css('margin-left', this.marginLeftB);
      this.widthB = this.widthB + 1;
      this.heightB = this.heightB + 1;
      this.borderRadiusB = this.borderRadiusB + 1;
      this.marginTopB = this.marginTopB - 0.75;
      this.marginLeftB = this.marginLeftB - 0.75;
      this.opacityB = this.opacityB - 0.001;
    }, 2);
    setInterval(() => {
      if (this.opacityB < 0.001) {
        this.opacityB = 1;
        this.widthB = 100;
        this.heightB = 100;
        this.marginTopB = 650;
        this.marginLeftB = 1500;
        this.borderRadiusB = 50;
      }
    }, 2);
  }
  bubbleC() {
    $('#bubbleC').show();
    this.interval3 = setInterval(() => {
      $('#bubbleC').css('width', this.widthC);
      $('#bubbleC').css('height', this.heightC);
      $('#bubbleC').css('opacity', this.opacityC);
      $('#bubbleC').css('border-radius', this.borderRadiusC);
      $('#bubbleC').css('margin-top', this.marginTopC);
      $('#bubbleC').css('margin-left', this.marginLeftC);
      this.widthC = this.widthC + 1;
      this.heightC = this.heightC + 1;
      this.borderRadiusC = this.borderRadiusC + 1;
      this.marginTopC = this.marginTopC - 0.75;
      this.marginLeftC = this.marginLeftC - 0.75;
      this.opacityC = this.opacityC - 0.001;
    }, 3);
    setInterval(() => {
      if (this.opacityC < 0.001) {
        this.opacityC = 1;
        this.widthC = 100;
        this.heightC = 100;
        this.marginTopC = 150;
        this.marginLeftC = 1600;
        this.borderRadiusC = 50;
      }
    }, 5);
  }
  bubbleD() {
    $('#bubbleD').show();
    this.interval4 = setInterval(() => {
      $('#bubbleD').css('width', this.widthD);
      $('#bubbleD').css('height', this.heightD);
      $('#bubbleD').css('opacity', this.opacityD);
      $('#bubbleD').css('border-radius', this.borderRadiusD);
      $('#bubbleD').css('margin-top', this.marginTopD);
      $('#bubbleD').css('margin-left', this.marginLeftD);
      this.widthD = this.widthD + 1;
      this.heightD = this.heightD + 1;
      this.borderRadiusD = this.borderRadiusD + 1;
      this.marginTopD = this.marginTopD - 0.75;
      this.marginLeftD = this.marginLeftD - 0.75;
      this.opacityD = this.opacityD - 0.001;
    }, 6);
    setInterval(() => {
      if (this.opacityD < 0.001) {
        this.opacityD = 1;
        this.widthD = 100;
        this.heightD = 100;
        this.marginTopD = 650;
        this.marginLeftD = 350;
        this.borderRadiusD = 50;
      }
    }, 7);
  }

}
