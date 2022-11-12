import { Component, OnInit, Input } from '@angular/core';
import * as $ from 'jquery';
import { FormControl, Validators, FormGroupDirective, NgForm } from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';





export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-custom-off-canvas',
  templateUrl: './custom-off-canvas.component.html',
  styleUrls: ['./custom-off-canvas.component.css']
})
export class CustomOffCanvasComponent implements OnInit {

  constructor() { }
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  passwordFormControl = new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9]+$'),Validators.minLength(8)]);

  matcherEmail = new MyErrorStateMatcher();
  matcherPass = new MyErrorStateMatcher();

  @Input() width:number = 0;
  
  ngOnInit(): void {
    $("#offCanvasContainer").hide();
  }
  showOffCanvas(){
    $("#offCanvasContainer").show();
  }
  closeOffCanvas(){
    $("#offCanvasContainer").hide();
  }

}
