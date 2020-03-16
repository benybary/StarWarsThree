import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../services/product.service'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.items = this.productService.getItems();
  }

}