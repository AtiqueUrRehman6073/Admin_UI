import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { DashboardAdminComponent } from './Views/dashboard-admin/dashboard-admin.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { CustomGridComponent } from './components/custom-grid/custom-grid.component';
import {HighchartGraphsComponent} from './components/highchart-graphs/highchart-graphs.component';
import { registerAllModules } from 'handsontable/registry';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import HotTableModule from 'handsontable';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DecimalPipe,CommonModule } from '@angular/common';
import { NgDygraphsModule } from 'ng-dygraphs';
import {HighchartsChartModule} from 'highcharts-angular';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { CustomModalsComponent } from './components/custom-modals/custom-modals.component';
import { CustomOffCanvasComponent } from './components/custom-off-canvas/custom-off-canvas.component';

registerAllModules();
@NgModule({
  declarations: [
    AppComponent,
    DashboardAdminComponent,
    SideMenuComponent,
    CustomGridComponent,
    DashboardComponent,
    HighchartGraphsComponent,
    CustomModalsComponent,
    CustomOffCanvasComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule,
    FormsModule,
    NgDygraphsModule,
    NgbModule,
    HttpClientModule,
    HighchartsChartModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    })
  ],
  providers: [DecimalPipe],
  bootstrap: [AppComponent]
})
export class AppModule {
  registerAllModules: any;
 }
