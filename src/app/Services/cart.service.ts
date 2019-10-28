import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items = [];

  constructor() { }

  /**
   * Add products to cart
   */
  addToCart(product){
    this.items.push(product);
  }

  /**
   * Get items array
   */
  getItems(){
    return this.items;
  }

  /**
   * Clear the current cart
   */
  clearCart(){
    this.items = [];
    return this.items;
  }
}