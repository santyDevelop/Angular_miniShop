import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items = [];

  constructor(private http: HttpClient) { }

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

  /**
   * Recoge mediante el servicio httpClient los datos correspondientes
   * a los gastos de envio desde el fichero shipping.json.
   * 
   * Si recogemos los datos desde una API rest, en este metodo tendriamos
   * que usar la url del servicio remoto
   */
  getShippingPrices(){
    return this.http.get('/assets/shipping.json');
  }
}