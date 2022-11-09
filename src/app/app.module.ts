import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { DashboardAdminComponent } from './Views/dashboard-admin/dashboard-admin.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { CustomGridComponent } from './components/custom-grid/custom-grid.component';
import { registerAllModules } from 'handsontable/registry';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import HotTableModule from 'handsontable';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DecimalPipe } from '@angular/common';
import { NgDygraphsModule } from 'ng-dygraphs';

registerAllModules();
@NgModule({
  declarations: [
    AppComponent,
    DashboardAdminComponent,
    SideMenuComponent,
    CustomGridComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule,
    FormsModule,
    NgDygraphsModule,
    NgbModule,
  ],
  providers: [DecimalPipe],
  bootstrap: [AppComponent]
})
export class AppModule {
  registerAllModules: any;
 }
