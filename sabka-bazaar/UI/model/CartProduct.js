/**
 * PURPOSE      :  This is the Model for CartProduct Object
 *
 * AUTHOR       :   Rohit Khanna
 *
 * LICENSE      :   PUBLIC
 *
 */
"use strict";

class CartProduct {
  constructor(productId) {
    this.id = productId;
    this.quantity = 1;  
    this.prodDetails = {};
  }
}

module.exports = CartProduct;
