import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { products } from '../products';
import { CartService } from '../Services/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  public product;

  constructor(private route: ActivatedRoute, 
              private cartService: CartService) {
    
  }
  
  /**
   * Metodo que delega al servicio la insercion de productos
   * al carrtito
   */
  addToCart(product){
    window.alert('Your product has been added to the cart!');
    this.cartService.addToCart(product);
  }

  ngOnInit() {
    this.route.paramMap.subscribe(
      params => {this.product = products[+params.get('productId')];
    });
  }

}