import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Order } from '../model/order.model';

/**
 * @author Mayur Patel
 * @description This is a card of order that contain all the order detail with DELETE and UPDATE Indicators
 */
@Component({
  selector: 'app-detail-card',
  templateUrl: './detail-card.component.html',
  styleUrls: ['./detail-card.component.css']
})
export class DetailCardComponent implements OnInit {

  /**
   * Input of detail card component
   */
  @Input() listOrderData: Order;

  /**
   * Output emitters of detail card component for update and delete eventw
   */
  @Output() deleteEvent = new EventEmitter<number>();
  @Output() updateEvent = new EventEmitter<Order>();
  constructor() { }

  ngOnInit() {
  }

  /**
   * Sends delete data id
   * @param orderId to identify which order to delete
   */
  sendDeleteData(orderId: number) {
    this.deleteEvent.emit(orderId);
  }

  /**
   * Sends data for update
   * @param order Order Object to fill the all detail of order in given form
   */
  sendDataForUpdate(order: Order) {
    this.updateEvent.emit(order);
  }

}
