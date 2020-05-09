import { Injectable } from '@angular/core';
import {catchError, map} from 'rxjs/operators';
import {Observable, throwError, from} from 'rxjs';
import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import {Product} from '../models/Product'

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // Uniform resource indicator
  baseUri: String = 'http://localhost:4000/api';
  headers = new HttpHeaders().set('Content-Type', 'application/json')
  prod = new Product;
  
  //DI
  constructor(private http:HttpClient) { }
  // Get all Products
  getProducts(){
    return this.http.get(`${this.baseUri}`);
  }

  

  // Add Product
  addProductToCart(data): Observable<any>{
    let url = `${this.baseUri}/cart`;
    return this.http.post(url, data).pipe(catchError(this.errorMgt));
  }
  // Get product by ID
  getProductByID(id): Observable<any>{
    let url = `${this.baseUri}/product/${id}`;
    console.log("getting item by ID");  
    return this.http.get(url, {headers: this.headers}).pipe(
      map((res:Response)=>{
        return res || {}
      }), catchError(this.errorMgt)
    );
  }
  // Error Handeling
errorMgt(error: HttpErrorResponse){
  let errorMsg = '';
  if (error.error instanceof ErrorEvent){
    errorMsg = error.error.message;
  } else {
    errorMsg = `Error code: ${error.status}\nMessage:${error.message}`;
  }
  console.log(errorMsg);
  return throwError(errorMsg);
}
  //add message to DB
  sendMessage(data): Observable<any>{
   return this.http.post<any>(this.baseUri+ '/message', data);
  }
  
}


