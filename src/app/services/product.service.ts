import { Injectable } from '@angular/core';
import {Product} from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  items = [];
  product = new Product;
  

  addToCart(product){
    this.items.push(product);
  }

  removeFromCart(product){
    this.items.forEach(item => {
      if(this.items[item]==product){
        this.items.pop();
        return;
      }
    });
    console.log(product + " Item removed"); 
  }

  getItems(){
    return this.items;
  }

  clearCart(){
    this.items = [];
    return this.items;
  }
}
