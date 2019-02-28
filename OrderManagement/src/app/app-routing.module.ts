import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'orders',
    loadChildren: 'app/order-management/order-management.module#OrderManagementModule'
  },
  {
    path: '',
    redirectTo: 'orders',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
