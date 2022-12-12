import { Component, OnInit, OnDestroy } from '@angular/core';
import * as $ from 'jquery';
import Handsontable from 'handsontable';
import { HotTableRegisterer } from '@handsontable/angular';
@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss']
})
export class AccountsComponent implements OnInit, OnDestroy {

  constructor() {
    this.licensekey = 'non-commercial-and-evaluation';
  }

  loader: boolean = false;
  loader2: boolean = true;
  maximizer: boolean = false;
  showFilesModal: boolean = false;
  showExcel: boolean = false;
  controls: boolean = false;///////////
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
  rightCheck: number = 20.65;
  shape3W: number = 4;
  shape6W: number = 48;
  boxWidth: number = 20;
  time: any = '';
  seconds: any = '';
  dateNow: any = '';
  monthNow: any = '';
  months: Array<any> = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
  ];
  recordFiles: any = [
    { Name: 'Record1.xlsc', Dated: '01-Jan-22' }, { Name: 'Record2.xlsc', Dated: '02-Jan-22' }, { Name: 'Record3.xlsc', Dated: '03-Jan-22' }, { Name: 'Record4.xlsc', Dated: '04-Jan-22' }, { Name: 'Record5.xlsc', Dated: '05-Jan-22' }, { Name: 'Record6.xlsc', Dated: '06-Jan-22' }, { Name: 'Record7.xlsc', Dated: '07-Jan-22' }, { Name: 'Record8.xlsc', Dated: '08-Jan-22' }, { Name: 'Record9.xlsc', Dated: '09-Jan-22' }, { Name: 'Record10.xlsc', Dated: '10-Jan-22' }, { Name: 'Record11.xlsc', Dated: '11-Jan-22' }, { Name: 'Record12.xlsc', Dated: '12-Jan-22' }, { Name: 'Record13.xlsc', Dated: '13-Jan-22' }
  ];
  licensekey: string = '';
  hotid = 'gridId';
  hotRegisterer = new HotTableRegisterer();
  hotTable: any;
  cols: any;
  dataset: any[] = [
    { id: 1, name: 'Ted Right', address: 'Wall Street' },
    { id: 2, name: 'Frank Honest', address: 'Pennsylvania Avenue' },
    { id: 3, name: 'Joan Well', address: 'Broadway' },
    { id: 4, name: 'Gail Polite', address: 'Bourbon Street' },
    { id: 5, name: 'Michael Fair', address: 'Lombard Street' },
    { id: 6, name: 'Mia Fair', address: 'Rodeo Drive' },
    { id: 7, name: 'Cora Fair', address: 'Sunset Boulevard' },
    { id: 8, name: 'Jack Right', address: 'Michigan Avenue' },
  ];
  initializeControls() {
    let container: any = document.getElementById('table');
    this.hotTable = new Handsontable(container, {
      licenseKey: 'non-commercial-and-evaluation',
      invalidCellClassName: 'errorCell',
      readOnlyCellClassName: 'disabledCell',
      maxRows: 100,
      comments: true,
      columnHeaderHeight: 25,
      preventOverflow: 'horizontal',
      rowHeaders: true,
      viewportColumnRenderingOffset: 27,
      viewportRowRenderingOffset: 'auto',
      colWidths: 150,
      minRows: 50,
      width: '100%',
      height: '100vh',
      rowHeights: 23,
      fillHandle: {
        direction: 'vertical',
        autoInsertRow: true
      },
      // afterOnCellMouseUp: (event, coords, TD) => {
      // },
      // afterChange: (event: any) => {
      // },
      data: Handsontable.helper.createSpreadsheetData(100, 10),
      minSpareRows: 1,
      allowInsertRow: true,
      stretchH: "all",
      // allowInsertColumn: false,
      // allowRemoveColumn: false,
      // allowRemoveRow: false,
      // autoWrapRow: false,
      // autoWrapCol: false,
      //  autoWrapRow: true,
      // height: 487,
      // maxRows: 22,
      manualRowResize: true,
      manualColumnResize: true,
      hiddenColumns: {
        columns: [10],
        indicators: false
      },
      columns: [
        {
          data: 'credit',
          type: 'numeric'
        },
        {
          data: 'narration',
          type: 'text',
        },
        {
          data: 'id',
          type: 'numeric'
        },
        {
          data: 'Temp',
          type: 'numeric'
        },
        {
          data: 'Temp',
          type: 'numeric'
        },
        {
          data: 'Temp',
          type: 'numeric'
        },
        {
          data: 'Temp',
          type: 'numeric'
        },
        {
          data: 'Temp',
          type: 'numeric'
        },
        {
          data: 'Temp',
          type: 'numeric'
        },
        {
          data: 'Temp',
          type: 'numeric'
        }
      ],
      colHeaders: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'],
      manualRowMove: true,
      manualColumnMove: true,
      contextMenu: true,
      filters: true,
      dropdownMenu: true,
    });
  }

  ngOnInit(): void {
    if (window.localStorage.getItem('Status') === 'Open') {
      this.loader2 = false;
    }
    var dt = new Date();
    this.dateNow = dt.getDate();
    this.monthNow = this.months[dt.getMonth()];
    let hrs = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();
    let hrsArr = hrs.split(":");
    this.time = hrsArr[0] + ':' + hrsArr[1];
    this.seconds = hrsArr[2];
    setInterval(() => {
      var dt = new Date();
      let hrs = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();
      let hrsArr = hrs.split(":");
      this.time = hrsArr[0] + ':' + hrsArr[1];
      this.seconds = hrsArr[2];
    }, 999);
    setTimeout(() => {
      if (window.innerWidth < 1500) {
        this.systemText2 = 'INITIATING JARVIS OS . . .';
        $("#lPart1").hide();
        $("#lPart2").hide();
      }
      if (window.innerWidth < 1600) {
        $("#xlPart1").hide();
        $("#xlPart2").hide();
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
        if (window.innerWidth === this.widthChecker) {
          $("#shape4").css('width', this.windowWidth + '%');
          $("#shape3").css('width', this.shape3W + '%');
          $("#shape3").css('right', this.rightCheck + '%');
          $(".col-1").css('width', this.boxWidth + 'px');
          $("#shape6").css('width', this.shape6W + '%');
          $("#shape7").css('width', '20.5%');
          break;
        }
        this.subtractorCheck++;
        this.widthChecker--;
      }
      window.localStorage.setItem('Status', 'Open');
      this.menuSettle();
    }, 200);
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
      this.loader2 = false;
    }, 15000);
  }
  menuSettle() {
    if ($("#menuToggle").is(':checked')) {
      $(".menuToggler").css('right', '200px');
    }
    else
      $(".menuToggler").css('right', '50px');
  }
  fullScreen() {
    let elem: any = document.getElementById('jarvisSystem');
    let methodToBeInvoked = elem.requestFullscreen;
    if (methodToBeInvoked) methodToBeInvoked.call(elem);
  }
  element: any = [];
  ngOnDestroy(): void {
    window.localStorage.clear();
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
      $("#bottleContainerID").css('opacity', '1');
      $("#particle2").css('opacity', '1');
      $("#particle1_3").css('opacity', '1');
      $("#ccp1").css('opacity', '1');
      $("#ccp2").css('opacity', '1');
      $("#ccp3").css('opacity', '1');
      $("#topbar").css('opacity', '1');
      $("#topbar2").css('opacity', '1');
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
      $("#particle1_3").css('opacity', '0.02');
      $("#ccp1").css('opacity', '0.02');
      $("#ccp2").css('opacity', '0.02');
      $("#ccp3").css('opacity', '0.02');
      $("#topbar").css('opacity', '0.02');
      $("#topbar2").css('opacity', '0.02');
      $("#bottleContainerID").css('opacity', '0.02');
    }
    setTimeout(() => {
      let x: any = 12;
      x = $("#filesModalId").width();
      if (x < 1300) {
        $(".filer").removeClass('col-xl-1');
        $(".filer").addClass('col-xl-2');
      }
      else {
        $(".filer").addClass('col-xl-1');
        $(".filer").removeClass('col-xl-2');
      }
    }, 200);
    this.maximizer = !this.maximizer;
  }
  closeWindow(id: any) {
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
    $("#topbar").css('opacity', '1');
    $("#topbar2").css('opacity', '1');
    $("#" + id).hide(150);
  }
  openDocs() {
    $("#filesModalId").show(150);
    this.showFilesModal = true;
    setTimeout(() => {
      let x: any = 12;
      x = $("#filesModalId").width();
      if (x < 1300) {
        $(".filer").removeClass('col-xl-1');
        $(".filer").addClass('col-xl-2');
      }
      else {
        $(".filer").addClass('col-xl-1');
        $(".filer").removeClass('col-xl-2');
      }
    }, 200);
  }
  openExcel() {
    this.showExcel = true;
    setTimeout(() => {
      this.initializeControls();
    }, 250);
  }
  closeExcel() {
    this.showExcel = false;
  }
  showControls(){
    this.controls = !this.controls;
  }
  // fileList: any = [];
  // loadFileNames(dir: any) {
  //   return new Promise((resolve, reject) => {
  //     try {
  //       var fileNames = new Array();
  //       $.ajax({
  //         url: dir,
  //         success: function (data) {
  //           for (var i = 1; i < $(data).find('li span.name').length; i++) {
  //             var elem = $(data).find('li span.name')[i];
  //             fileNames.push(elem.innerHTML);
  //           }
  //           return resolve(fileNames);
  //         }
  //       });
  //     } catch (ex) {
  //       return reject(ex);
  //     }
  //   });
  // }
  // getFileNames() {
  //   this.loadFileNames('../')
  //     .then((data) => {
  //       console.log(data);
  //     })
  //     .catch((error) => {
  //       alert('Files could not be loaded. please check console for details');
  //       console.error(error);
  //     });
  // $('#camera-open').change((event: any) => {
  //   this.fileList = Array.prototype.slice.call(event.target.files);
  //   var filePaths = this.fileList.map((file:any) => { return file.name; });
  //   var onlyNames = filePaths.map((file:any) => { return file.split('/').pop().split('\\').pop(); });
  //   console.log(onlyNames);
  // });
  // getFileNames() {
  //   let fileNames: any = '';
  //   $.ajax({
  //     url: "/app/",
  //     success: function (data) {
  //       //console.log(data);
  //       $(data).find("td > a").each(() => {
  //         if (this.openFile($(this).attr("href"))) {
  //           fileNames.push($(this).attr("href"));
  //         }
  //       });
  //     }
  //   });
  //   console.log(fileNames);
  // }
  // openFile(file: any) {
  //   var extension = file.substr((file.lastIndexOf('.') + 1));
  //   switch (extension) {
  //     case 'jpg':
  //     case 'png':
  //     case 'gif':   // the alert ended with pdf instead of gif.
  //     case 'zip':
  //     case 'rar':
  //     case 'pdf':
  //     case 'php':
  //     case 'doc':
  //     case 'docx':
  //     case 'xls':
  //     case 'xlsx':
  //       return true;
  //     default:
  //       return false;
  //   }
  // };
}