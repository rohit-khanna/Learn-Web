/**
 * PURPOSE      :  This is the Model for Shopping Cart Object
 *
 * AUTHOR       :   Rohit Khanna
 *
 * LICENSE      :   PUBLIC
 *
 */
"use strict";

import CartProduct from "./CartProduct";
import ShoppingCartService from "./../services/ShoppingCartService";

class ShoppingCart {
  constructor(shoppingCartObject) {
   ///console.log(shoppingCartObject);

    this.cartProducts = shoppingCartObject.cartProducts || []; // can be 2 products with 2 instances each: hence count=2
    this.itemCount = shoppingCartObject.itemCount || 0; // will be 4
    this.total = shoppingCartObject.total || 0;
    this.serviceInstance =
      shoppingCartObject.serviceInstance || new ShoppingCartService();
  }

  addProduct(id) {
    let product = this.cartProducts.find(ele => ele.id == id);
    if (product) {
      product.quantity++;
      this.incrementTotal(product);
    } else {
      let newProduct = new CartProduct(id);
      newProduct.prodDetails = this.fetchProductDetails(id);
      // console.log(newProduct.prodDetails);

      this.cartProducts.push(newProduct);    
      this.incrementTotal(newProduct);
    }
    this.itemCount++;
  }

  removeProduct(id) {
    let product = this.cartProducts.find(x => x.id == id);

    for (let i = 0; i < product.quantity; i++) {
      this.itemCount--;
      decrementTotal(product);
    }
    let index = this.cartProducts.findIndex(p => p.id == id);
    this.cartProducts.splice(index, 1);
  }

  editProduct(id, newQty) {
    let product = this.cartProducts.find(x => x.id == id);

    if (newQty) {
      let diff = newQty - product.quantity;

      if (diff == 0) {
        // do nothing
      } else {
        for (let i = 0; i < Math.abs(diff); i++) {
          diff > 0
            ? this.incrementProductQuantity(id)
            : this.decrementProductQuantity(id);
        }
      }
    }
  }

  fetchProductDetails(id) {

    return this.serviceInstance.products.find(ele => ele.id == id);
  }

  /**
   * method to Increment The Product Quantity in cart
   * @param {*} id cartProductId
   */
  incrementProductQuantity(id) {
    let product = this.cartProducts.find(x => x.id == id);    
    product.quantity += 1;
    this.itemCount += 1;
    this.incrementTotal(product);
    return product.quantity;
  }

  decrementProductQuantity(id) {
    let product = this.cartProducts.find(x => x.id == id);
    product.quantity -= 1;
    this.itemCount -= 1;
    this.decrementTotal(product);
    if(product.quantity==0)
    {
      this.removeProduct(id);
    }
    return product.quantity;
  }

  incrementTotal(product) {
    this.total += product.prodDetails.price;
  }

  decrementTotal(product) {
    this.total -= product.prodDetails.price;
  }

  async postAddToCart(productId){
   let scSvc=new ShoppingCartService();
   let response= await scSvc.postAddToCart(productId);
   return response;
  }
}

export default {
  GetCartInstanceAsync: async function(_obj) {
    let obj = _obj || {};
    let ins = new ShoppingCart(obj);
    if (!_obj) await ins.serviceInstance.loadMockDataAsync();
    return ins;
  }
};
