import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-new-member-form',
  templateUrl: './add-new-member-form.component.html',
  styleUrls: ['./add-new-member-form.component.css']
})
export class AddNewMemberFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  readURL(input:any) {
    console.log(input);
    if (input.files && input.files[0]) {
      console.log('reader : ');
      let reader = new FileReader();
      console.log(reader);
      reader.onload = (e:any) => {
        console.log(e.target.result)
        $('#blah').attr('src', e.target.result).width(150).height(200);
      };
  
      reader.readAsDataURL(input.files[0]);
    }
  }
}
