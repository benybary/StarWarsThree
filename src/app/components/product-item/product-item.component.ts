import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ProductService } from '../../services/product.service'
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from '../../models/Product'

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {


  productID: any;
  productData: any;
  //product: Product;

  constructor(private apiService: ApiService,
    private router: Router,
    private actRoute: ActivatedRoute,
    private productService: ProductService) { }


  // getProductById(id){
  //   this.apiService.getProductByID(id).subscribe((data)=> {
  //     this.productData = data;
  // })
  // }

  // ngOnInit(): void {
  //   this.actRoute.params.subscribe((params)=>{
  //     this.apiService.getProductByID(params['id']).subscribe((res)=>{
  //       this.productData = res;
  //     });
  //   });
  //   this.getProductById(this.actRoute.snapshot.params['id']);
  // }



  getProductByID(productID) {
    this.apiService.getProductByID(productID).subscribe(product => {
      this.productData = product;
      console.log(this.productData);

    });
  }

  navigation(link) {
    this.router.navigate([link]);
  }


  ngOnInit() {
    this.productID = this.actRoute.snapshot.params['id'];
    this.getProductByID(this.productID);
  }

  addToCart(product) {
    //console.log(product);
    //window.alert('Your product has been added to the cart!');
    this.productService.addToCart(product);
  }

  // addQuantity(product) {
  //   this.productService.addQuantity(product);
  // }

  removeQuantity(product) {
    this.productService.removeQuantity(product);
  }

  removeProduct(product) {
    this.productService.removeProduct(product);

}

}


