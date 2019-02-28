import { NgModule } from '@angular/core';
import { OrderComponent } from './order/order.component';
import { Routes, RouterModule } from '@angular/router';
import { OrderService } from './services/order.service';
import { DetailCardComponent } from './detail-card/detail-card.component';
import { SharedModule } from '../shared/shared.module';

const orderRoutes: Routes = [
  {
    path: '',
    component: OrderComponent
  }
];
@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(orderRoutes)
  ],
  declarations: [OrderComponent, DetailCardComponent],
  providers: [OrderService]
})
export class OrderManagementModule { }
