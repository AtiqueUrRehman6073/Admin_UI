import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import { NgbdModalContent } from 'src/app/components/dashboard/dashboard.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastServiceService } from 'src/app/services/toast-service/toast-service.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  constructor(private router: Router, private modalService: NgbModal, private customAlertService: ToastServiceService) { }

  modaldata: any = "";
  modalWidth: any = 500;
  files: Array<any> = [
    "James", "Josephine", "Art", "Erick", "Fatima", "Jina", "Kanisha", "Emerson",
    "Lenna", "Donette", "Simona", "Mitsue", "Leota", "Sage", "Kris", "Minna", "Abel", "Kiley", "Graciela", "Cammy", "Mattie", "Gladys", "Yuki", "Fletcher", "Bette", "Veronika", "Willard", "Maryann",
    "Alisha", "Allene", "Chanel", "Ezekiel", "Willow", "Bernardo", "Ammie", "Francine", "Ernie", "Albina", "Alishia", "Solange", "Jose", "Rozella", "Valentine", "Kati", "Youlanda", "Dyan", "Roxane", "Lavera",
  ];
  loader: boolean = true;
  ngOnInit(): void {
    setTimeout(() => {
      this.loader = false;
    }, 1500);
  }
  toDashboard() {
    this.router.navigateByUrl('dashboard');
  }
  ////////// Default Modal //////////
  openModal() {
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.name = 'World';
  }
  enterPass(fileName: any) {
      var c = prompt(fileName + ' is locked ! Enter login password : ');
  }

}
