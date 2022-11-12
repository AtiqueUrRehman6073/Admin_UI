import { Component, OnInit, ViewChild, AfterViewInit, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import swal from 'sweetalert';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import * as $ from 'jquery'
import { ToastServiceService } from 'src/app/services/toast-service/toast-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements AfterViewInit {
  
  constructor(private _snackBar: MatSnackBar, private modalService: NgbModal,private toastr: ToastrService, private customAlertService:ToastServiceService) { }
  modalWidth:number = 500;
  modaldata:any = null;
  canvasWidth:number = 400;
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  data = [[new Date("2008/05/07"), 75],
  [new Date("2008/05/08"), 70],
  [new Date("2008/05/09"), 65],
  [new Date("2008/05/10"), 72],
  [new Date("2008/05/11"), 90],
  [new Date("2008/05/12"), 60],
  [new Date("2008/05/13"), 85]
  ];
  folders: Section[] = [
    {
      name: 'Photos',
      updated: new Date('1/1/16'),
    },
    {
      name: 'Recipes',
      updated: new Date('1/17/16'),
    },
    {
      name: 'Work',
      updated: new Date('1/28/16'),
    },
  ];
  options = { width: 800, labels: ['Date', 'Bottles'], xlabel: 'X label text', ylabel: 'Y label text', title: 'Sales', animatedZooms: true, pointSize: 4 }
  
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {
    this.showSuccess();
    this.dataSource.paginator = this.paginator;
  }
  /////////   Toasts Functions   ///////////
  showSuccess() {
    this.toastr.success('Welcome to Mangla-Foods Admin!!', 'Login Successful!');
  }

  ////////   Swal Functions  ///////////
  showAlert() {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          swal("Done!", "File Deleted!", "error");
        } else {
          swal("Good job!", "Your File is Safe!", "success");
        }
      });
  }

  ////////   Snackbar Functions  ///////////
  durationInSeconds = 2;
  openSnackBar() {
    this._snackBar.openFromComponent(PizzaPartyComponent, {
      duration: this.durationInSeconds * 1000,
    });
  }

  ////////   Modals  ///////////
  openModal() {
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.name = 'World';
  }
  showCustomModal(){
    this.modaldata = '<h1 style="background:red">Hello, How are you doing today......?<h1><h4>I hope doing well.......eh?</h4>';
    this.customAlertService.showModal();
  }

  showCustomOffCanvas(){
    $("#offCanvasContainer").show();
  }
}

@Component({
  selector: 'snack-bar-component-example-snack',
  templateUrl: './snack-bar-component-example-snack.html',
  styles: [
    `
    .example-pizza-party {
      color: warm;
    }
  `,
  ],
})
export class PizzaPartyComponent { }

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
export interface Section {
  name: string;
  updated: Date;
}
@Component({
  selector: 'ngbd-modal-content',
  template: `
		<div class="modal-header">
			<h4 class="modal-title">Hi there!</h4>
			<button type="button" class="btn-close" aria-label="Close" (click)="activeModal.dismiss('Cross click')"></button>
		</div>
		<div class="modal-body">
			<p>Hello, {{ name }}!</p>
		</div>
		<div class="modal-footer">
			<button type="button" class="btn btn-danger" ngbAutofocus (click)="activeModal.close('Close click')">Close</button>
		</div>
	`,
})
export class NgbdModalContent {
  @Input() name: any;

  constructor(public activeModal: NgbActiveModal) { }
}
const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
  { position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na' },
  { position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg' },
  { position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al' },
  { position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si' },
  { position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
  { position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S' },
  { position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl' },
  { position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar' },
  { position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K' },
  { position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca' },
];