import { Injectable } from '@angular/core';
import { Product } from '../models/Product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[];
  cart = [];
  productQuantity = 1;

  itemExists(product): boolean {
    let exists: boolean = false;
    let localStorageCart = JSON.parse(localStorage.getItem('cart'));
    let cart: any[] = !localStorageCart ? [] : localStorageCart;
    cart.map(productItem => {
      if (product._id === productItem._id) {
        exists = true;
      }
      console.log(product.name + " exists: " + exists);
      return exists;
    });
    return exists;
  }

  addToCart(newProduct) {

    //1. init update cart === []
    let updatedCart = [];
    //2. get current cart
    let localStorageCart = JSON.parse(localStorage.getItem('cart'));
    localStorageCart = localStorageCart ? localStorageCart : [];
    //3. find if product exist in current cart
    let productExists = localStorageCart.some(product => product._id === newProduct._id)
    if (productExists) {
      //4. loop over items in cart and add quant to product
      updatedCart = localStorageCart.map(product => {
        if (product._id === newProduct._id) {
          //5. in the loop return every product to updated array
          return { ...product, quantity: ++product.quantity }
        }
        return product;
      });
    } else {
      updatedCart = [...localStorageCart, { ...newProduct, quantity: 1 }];
    }
    //6. save new cart to localstorage
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    this.showCartItems();
  }


  // // get cart from local storage
  // console.log(JSON.parse(localStorage.getItem('cart')));
  // //let localStorageCart = JSON.parse(localStorage.getItem('cart'));
  // let cart: any[] = !localStorageCart ? [] : localStorageCart;   
  // let porductExists = this.state.cart.some(product)
  // //add new item,
  // cart.push(product);
  // console.log(cart);
  // // setting new cart in local storage
  // localStorage.setItem('cart', JSON.stringify(cart));


  // removeFromCart(product){
  //   this.cart.forEach(item => {
  //     if(this.items[]==product){
  //       this.items.pop();
  //       return;
  //     }
  //   });
  //   console.log(product + " Item removed"); 
  // }

  showCartItems() {
    this.products = JSON.parse(localStorage.getItem('cart'));
    console.log("these are the items in the cart: " + this.products);
    return this.products;
  }


  // addQuantity(product) {
  //   let cart = JSON.parse(localStorage.getItem('cart'))
  //   let updatedCart = cart.map(productItem => {
  //     if (product._id === productItem._id) {
  //       if (!productItem.quantity) {
  //         productItem.quantity = 1;
  //       }
  //       productItem.quantity += 1;
  //     }
  //     return productItem;
  //   });
  //   localStorage.setItem('cart', JSON.stringify([...updatedCart]))
  // }

  removeQuantity(product) {
    let cart = JSON.parse(localStorage.getItem('cart'))
    let updatedCart = cart.map(productItem => {
      if (productItem.quantity === 1) return null
      if (product._id === productItem._id) {
        productItem.quantity -= 1;
      }
      return productItem;
    })
      .filter(productItem => productItem !== null)
    localStorage.setItem('cart', JSON.stringify([...updatedCart]))
  }

  removeProduct(product) {
    let cart = JSON.parse(localStorage.getItem('cart'))
    let updatedCart = cart.filter(productItem => product._id !== productItem._id)

    // update local storage
    localStorage.setItem('cart', JSON.stringify([...updatedCart]))

  }
}