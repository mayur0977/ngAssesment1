import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/order.service';
import { Order, OrderButtonText } from '../model/order.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

/**
 * @author Mayur Patel
 * @description This component will add,update,view and delete order using json server
 * Database file is located in src/database/db.json
 */
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  ordersData: Order[];
  orderDetail: FormGroup;
  buttonText = OrderButtonText.AddButtonText;
  accessStatus = true;
  singleOrder: Order;
  orderUpdateId: number;

  /**
   * Creates an instance of order component.
   * @param orderService create order service instance
   * @param fb create formBuilder instance
   */
  constructor(private orderService: OrderService, private fb: FormBuilder) { }

  /**
   * on init
   * @description intialize order form and get all previous orders
   */
  ngOnInit() {
    this.orderDetailDefaultForm();
    this.getAllOrders();
  }

  /**
   * Orders detail default form set to null
   */
  orderDetailDefaultForm() {
    this.accessStatus = true;
    this.orderDetail = this.fb.group({
      productName: ['', [Validators.required]],
      orderDate: ['', Validators.required],
      qty: ['', Validators.required],
      productPrice: ['', Validators.required],
      status: ['Pending', Validators.required]
    });
  }

  /**
   * Determines whether submit based on the button Type if the button type is ADD then it will add the data
   * otherwisee it update The order
   */
  onSubmit() {
    this.singleOrder = this.orderDetail.value;
    if (this.buttonText === OrderButtonText.AddButtonText) {
      this.orderService.addOrder(this.singleOrder).subscribe((res) => {
        this.orderDetailDefaultForm();
        this.getAllOrders();
      });
    } else {
      this.orderService.updateOrder(this.singleOrder, this.orderUpdateId).subscribe((res) => {
        this.orderDetailDefaultForm();
        this.getAllOrders();
      });
      this.buttonText = OrderButtonText.AddButtonText;
    }

  }
  /**
   * Gets all orders from server and store order data in orderData variable
   */
  getAllOrders() {
    this.orderService.getAllOrders().subscribe((res) => {
      this.ordersData = res;
      console.log(this.ordersData);
    });
  }

  /**
   * Deletes order
   * @param orderId accept order id for delete order
   */
  deleteOrder(orderId: number) {
    this.orderService.deleteSingleOrder(orderId).subscribe((res) => {
      this.getAllOrders();
    });
  }

  /**
   * Fills data on button click
   * @param orderData get the data from child detail card compoment to fill the given form for update data
   */
  fillDataonUpdateButtonClick(orderData: Order) {
    this.accessStatus = false;
    this.orderUpdateId = orderData.id;
    this.buttonText = OrderButtonText.UpdateButtonText;
    this.orderDetail.controls['productName'].setValue(orderData.productName);
    this.orderDetail.controls['orderDate'].setValue(orderData.orderDate);
    this.orderDetail.controls['qty'].setValue(orderData.qty);
    this.orderDetail.controls['productPrice'].setValue(orderData.productPrice);
    this.orderDetail.controls['status'].setValue(orderData.status);
  }

}
