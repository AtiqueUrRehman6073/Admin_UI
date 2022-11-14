import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardAdminComponent } from './Views/dashboard-admin/dashboard-admin.component';
import { LoginAdminComponent } from './Views/login-admin/login-admin.component';
import { OrdersComponent } from './Views/orders/orders.component';

const routes: Routes = [
  {path:'',component:LoginAdminComponent},
  {path:'dashboard',component:DashboardAdminComponent},
  {path:'orders',component:OrdersComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
