/**
 * PURPOSE      :  This is the Model for Shopping Cart-Product
 *
 * AUTHOR       :   Rohit Khanna
 *
 * LICENSE      :   PUBLIC
 *
 */

"use strict";

class CartProduct {
  
  constructor(productId, size, color, specialPrice = -1) {
    this.id = productId;
    this.quantity = 1;
    this.specialPrice = specialPrice;
    this.size = size;
    this.color = color;
    this.prodDetails= {};
  }

 
  /**
   * Fetch the Product Details from Product Service
   */
  getProductDetails() {
    //Todo
    // Fetch Product Details for this Product
    throw new Error("Not Implemented");
  }

  getProductPrice() {
    //Todo
    // Fetch Product Details for this Product
    return 655.76;
  }
}

export default CartProduct;
