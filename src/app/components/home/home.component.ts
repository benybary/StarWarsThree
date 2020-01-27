import { Component, OnInit, NgModule } from '@angular/core';
import { Product } from '../../models/Product';
import { ApiService } from '../../services/api.service';
import { ProductService } from '../../services/product.service';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {



  myListProducts: Product[] = [];

  constructor(private apiService: ApiService, private productService: ProductService, router: Router) {
    
   }

  // ngOnInit() {
  //   this.myListProducts = this.productService.findAll();
  // }

  // TODO Fetch from DB
  ngOnInit(): void {
    const prodObserver = this.apiService.getProducts();
    prodObserver.subscribe((prodData: Product[])=>{this.myListProducts = prodData});
  }

 

}


