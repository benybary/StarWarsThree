import { Component, OnInit, NgModule } from '@angular/core';
import { Product } from '../../models/Product';
import { ApiService } from '../../services/api.service';
import { ProductService } from '../../services/product.service';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  uri = 'http://localhost:4000/api';

  myListProducts: Product[] = [];

  constructor(private http: HttpClient, private apiService: ApiService, private productService: ProductService, router: Router) {

  }

  // ngOnInit() {
  //   this.myListProducts = this.productService.findAll();
  // }

  // TODO Fetch from DB
  ngOnInit(): void {
    const prodObserver = this.apiService.getProducts();
    prodObserver.subscribe((prodData: Product[]) => { this.myListProducts = prodData });
  }

  getProductByID(id) {
    return this.http.get(`${this.uri}/product/${id}`)
  }

  addToCart(product) {
    //window.alert('Your product has been added to the cart!');
    this.productService.addToCart(product);
  }

  removeQuantity(product) {
    this.productService.removeQuantity(product);
  }

  removeProduct(product) {
    this.productService.removeProduct(product);
  }


}


