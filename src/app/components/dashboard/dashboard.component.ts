import { Component, OnInit, ViewChild, AfterViewInit, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import swal from 'sweetalert';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import * as $ from 'jquery'
import { ToastServiceService } from 'src/app/services/toast-service/toast-service.service';
import { CanvasJS } from 'src/assets/canvasjs.angular.component';

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
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol','icon'];
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
  doughnutChart:any;
  ngAfterViewInit() {
    this.showSuccess();
    this.dataSource.paginator = this.paginator;
    this.doughnutChart = new CanvasJS.Chart("chartContainer", {
      animationEnabled: true,
      title:{
        text: "Accounts (Cash)",
        horizontalAlign: "left"
      },
      data: [{
        type: "doughnut",
        startAngle: 60,
        innerRadius: 30,
        indexLabelFontSize: 17,
        indexLabel: "{label} - #percent%",
        toolTipContent: "<b>{label}:</b> {y} (#percent%)",
        dataPoints: [
          { y: 67, label: "Received" },
          { y: 28, label: "Pending" },
          { y: 10, label: "Advance" },
          { y: 7, label: "Clear"},
          { y: 6, label: "Stuck"},
          { y: 15, label: "Expenses"}
        ]
      }]
    });
    this.doughnutChart.render();
  }
  /////////   Toasts Functions   ///////////
  showSuccess() {
    this.toastr.success('Welcome to Mangla-Foods Admin!!', 'Login Successful!');
  }
  showDanger() {
    this.toastr.error('Oops! Somtehing went wrong!', 'Error!');
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

  ////////   ChartJS   //////////////

  dps = [{ x: 10, y: 10 }, { x: 20, y: 13 }, { x: 30, y: 18 }, { x: 40, y: 20 }, { x: 50, y: 17 }, { x: 60, y: 10 }, { x: 70, y: 13 }, { x: 80, y: 18 }, { x: 90, y: 20 }, { x: 100, y: 17 }];
  chart: any;

  chartOptions = {
    exportEnabled: true,
    title: {
      text: "CPU Performance"
    },
    data: [{
      type: "spline",
      markerSize: 1,
      dataPoints: this.dps
    }],
  }
  getChartInstance(chart: object) {
    this.chart = chart;
    setTimeout(this.updateChart, 100); //Chart updated every 1 second
  }
  updateChart = () => {
    var yVal = this.dps[this.dps.length - 5].y + Math.round(15 + Math.random() * (-5-3));
    this.dps.push({ x: this.dps[this.dps.length - 1].x + 1, y: yVal - 1 });

    if (this.dps.length > 10) {
      this.dps.shift();
    }
    this.chart.render();
    setTimeout(this.updateChart, 800); //Chart updated every 1 second
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
  iconEdit: string;
  iconDelete: string;
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
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' ,iconEdit:'edit',iconDelete:'delete'},
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' ,iconEdit:'edit',iconDelete:'delete'},
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' ,iconEdit:'edit',iconDelete:'delete'},
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' ,iconEdit:'edit',iconDelete:'delete'},
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' ,iconEdit:'edit',iconDelete:'delete'},
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' ,iconEdit:'edit',iconDelete:'delete'},
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' ,iconEdit:'edit',iconDelete:'delete'},
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' ,iconEdit:'edit',iconDelete:'delete'},
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' ,iconEdit:'edit',iconDelete:'delete'},
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' ,iconEdit:'edit',iconDelete:'delete'},
  { position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na' ,iconEdit:'edit',iconDelete:'delete'},
  { position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg' ,iconEdit:'edit',iconDelete:'delete'},
  { position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al' ,iconEdit:'edit',iconDelete:'delete'},
  { position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si' ,iconEdit:'edit',iconDelete:'delete'},
  { position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P' ,iconEdit:'edit',iconDelete:'delete'},
  { position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S' ,iconEdit:'edit',iconDelete:'delete'},
  { position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl' ,iconEdit:'edit',iconDelete:'delete'},
  { position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar' ,iconEdit:'edit',iconDelete:'delete'},
  { position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K' ,iconEdit:'edit',iconDelete:'delete'},
  { position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca' ,iconEdit:'edit',iconDelete:'delete'},
];