import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ProductService} from '../../services/product.service';
import {Product} from '../../models/Product'; 
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
	private total: number = 0;
	private products: Product[] = [];
	constructor(
		private activatedRoute: ActivatedRoute,
		private productService: ProductService,
		private apiService: ApiService
	) { }

	ngOnInit() {
		this.products = this.productService.showCartItems();
  }

  addToCart(product) {
	this.productService.addToCart(product);
	this.products = this.productService.showCartItems();
  }

  removeQuantity(product) {
	this.productService.removeQuantity(product);
	this.products = this.productService.showCartItems();
  }

  removeProduct(product) {
	this.productService.removeProduct(product);
	this.products = this.productService.showCartItems();
}



}
