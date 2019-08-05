/** 
* PURPOSE      :  This is the Model class for the Shopping Cart 

* AUTHOR       :   Rohit Khanna
*
* LICENSE      :   PUBLIC
*/

"use strict";

import CartProduct from "./CartProduct";
import { debug } from "util";

class ShoppingCart {
  constructor() {
    this.cartProducts = []; // can be 2 products with 2 instances each: hence count=2
    this.itemCount = 0; // will be 4
    this.promoCode;
    this.subTotal = 0;
    this.shippingCharge = 0;
    this.estimatedTotal = 0;
    this.promoCodeDiscount = 0;
  }

  /**
   *
   * @param {*} id
   * @param {*} specialPrice
   */
  addProduct(id, size, color, specialPrice, otherDetails) {
    let newProduct = new CartProduct(id, size, color, specialPrice);
    newProduct.prodDetails = otherDetails;
    this.cartProducts.push(newProduct);
    this.itemCount++;
    this.incrementSubTotal(newProduct);
  }

  /**
   * method to Increment The Product Quantity in cart
   * @param {*} id cartProductId
   */
  incrementProductQuantity(id) {
    let product = this.cartProducts.find(x => x.id == id);
    product.quantity += 1;
    this.itemCount += 1;
    this.incrementSubTotal(product);
  }

  /**
   * method to Decrement The Product Quantity in cart
   * @param {*} id cartProductId
   */
  decrementProductQuantity(id) {
  //  console.log('enter');
    
    let product = this.cartProducts.find(x => x.id == id);
    product.quantity -= 1;
    this.itemCount -= 1;
    this.decrementSubTotal(product);
  }

  /**
   * Remove the Product from Cart.
   * @param {*} id CartProductId
   */
  removeProduct(id) {
    let product = this.cartProducts.find(x => x.id == id);
  //  console.log(id);

    // adjust the Totals
    for (let i = 0; i < product.quantity; i++) {
      this.itemCount--;
      this.decrementSubTotal(product);
    }
    //remove from Cart
    let index = this.cartProducts.findIndex(p => p.id == id);
    this.cartProducts.splice(index, 1);
  //  console.log(this.cartProducts);
  }

  /**
   * method to Edit Cart Product
   * @param {*} newColor new Color
   * @param {*} newSize new Size
   * @param {*} newQty new Quantity: NOT IMPLEMENTED
   */
  editProduct(id, newColor, newSize, newQty) {
    let product = this.cartProducts.find(x => x.id == id);
    if (newSize) {
      product.size = newSize;
    }
    if (newColor) {
      product.color = newColor;
    }
    if (newQty) {
      let diff = newQty - product.quantity;
    //  console.log("diff", diff);

      if (diff == 0) {
        // do nothing
      } else {
        for (let i = 0; i < Math.abs(diff); i++) {
          diff > 0  ? this.incrementProductQuantity(id)    : this.decrementProductQuantity(id);
        }
      }
    }
  }

  /**
   * Increment The Cart SubTotal
   * @param {*} product Product Added
   */
  incrementSubTotal(product) {
    this.subTotal +=
      product.specialPrice != 0
        ? product.specialPrice
        : product.prodDetails.price;
    //   console.log("ST", this.subTotal,product.specialPrice,product.prodDetails.price);

    //calculate Estmated Total
    this.calculateEstimatedTotal();
  }

  /**
   * Decrement The Cart SubTotal
   * @param {*} product Product Removed
   */
  decrementSubTotal(product) {
    this.subTotal -=
      product.specialPrice != 0
        ? product.specialPrice
        : product.prodDetails.price;

    //calculate Estmated Total
    this.calculateEstimatedTotal();
  }

  /**
   * Calculate The Estimated Total for CART
   */
  calculateEstimatedTotal() {
    // console.log(this.subTotal);

    this.estimatedTotal = parseFloat(
      this.subTotal - this.promoCodeDiscount + this.shippingCharge
    ).toFixed(2);

    //   console.log(this.estimatedTotal);
  }

  /**
   * Apply Promo/Discount Code
   * Active: RK01,Rk02,RK03
   * @param {*} code
   */
  applyPromoCode(code) {
    if (code) {
      code = code.toUpperCase();
      this.promoCode = code;
      switch (code) {
        case "RK01":
          this.promoCodeDiscount = 10;
          break;
        case "RK02":
          this.promoCodeDiscount = 20;
          break;
        case "RK03":
          this.promoCodeDiscount = 30;
          break;
        default:
          this.promoCodeDiscount = 0;
          break;
      }

      this.calculateEstimatedTotal();
    }
  }

  /**
   * Apply Shipping Charge
   * @param {number} charge
   */
  applyShippingCharge(charge) {
    this.shippingCharge = parseFloat(charge);

    this.calculateEstimatedTotal();
  }
}

export default ShoppingCart;
