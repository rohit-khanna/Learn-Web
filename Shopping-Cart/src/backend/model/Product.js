/**
 * PURPOSE      :  This is the MODEL class for Product for Shopping Cart
 *
 * AUTHOR       :   Rohit Khanna
 *
 * LICENSE      :   PUBLIC
 */

"use strict";

class Product {
  /**
   *
   * @param {*} description Descrption of Item
   * @param {*} colorsArray String-Array of Available Colors
   * @param {*} sizeArray String-Array of Available Sizes
   * @param {*} style style description
   * @param {*} price Price
   */
  constructor(
    description,
    colorsArray,
    sizeArray,
    style,
    price = 0,
    id = new Date().getTime()
  ) {
    this.id = id;
    this.description = description;
    this.availableColors = colorsArray.toUpperCase();
    this.availableSizes = sizeArray.toUpperCase();
    this.style = style;
    this.price = parseFloat(price);
    this.imgUrl = "http://google.com";
  }
}

Array.prototype.toUpperCase = function() {
  return this.map(str => {
    return str.toUpperCase();
  });
};

export default Product;
