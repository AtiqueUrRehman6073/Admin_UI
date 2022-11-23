import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardAdminComponent } from './Views/dashboard-admin/dashboard-admin.component';
import { LoginAdminComponent } from './Views/login-admin/login-admin.component';
import { OrdersComponent } from './Views/orders/orders.component';
import { AddNewOrderFormComponent } from './components/add-new-order-form/add-new-order-form.component';
import { EmployeesListingComponent } from './components/employees-listing/employees-listing.component';
import { AddNewMemberFormComponent } from './components/add-new-member-form/add-new-member-form.component';
import { AccountsComponent } from './Views/accounts/accounts.component';

const routes: Routes = [
  {path:'',component:LoginAdminComponent},
  {path:'dashboard',component:DashboardAdminComponent},
  {path:'orders',component:OrdersComponent},
  {path:'orders/new',component:AddNewOrderFormComponent},
  {path:'employees/workers',component:EmployeesListingComponent},
  {path:'employees/new',component:AddNewMemberFormComponent},
  {path:'admin/accounts',component:AccountsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
