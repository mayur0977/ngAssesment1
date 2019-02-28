import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Order } from '../model/order.model';

/**
 * @author Mayur Patel
 * @description this will use to perform CRUD operation for order management using HttpClient service
 */
@Injectable()
export class OrderService {

  baseUrl = 'http://localhost:3000/Orders';

  constructor(private http: HttpClient) { }

  /**
   * Gets all orders
   * @returns all orders as Observable of type Order
   */
  getAllOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(this.baseUrl);
  }
  /**
   * Adds order
   * @param orderBody accept order object to add in database
   * @returns return added response back to user
   */
  addOrder(orderBody: Order) {
    return this.http.post(this.baseUrl, orderBody);
  }

  /**
   * Delete single order
   * @param orderId Accept order id to delete from database
   * @returns return deleted data response back to user
   */
  deleteSingleOrder(orderId: number) {
    return this.http.delete(this.baseUrl + '/' + orderId);
  }

  /**
   * Updates order
   * @param updatedBody accept order object to update data
   * @param orderId accept orderId to which data is going to be change
   * @returns return updated data response back to user
   */
  updateOrder(updatedBody, orderId) {
    return this.http.put(this.baseUrl + '/' + orderId, updatedBody);
  }


}
