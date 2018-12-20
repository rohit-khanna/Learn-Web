/**
 * PURPOSE      :  This is the Model for Product Object
 *
 * AUTHOR       :   Rohit Khanna
 *
 * LICENSE      :   PUBLIC
 *
 */
"use strict";

class Product {
  constructor(id, name, imageUrl, description, price, stock, categoryId, sku) {
    this.name = name;
    this.imageURL = imageUrl;
    this.description = description;
    this.price = price;
    this.stock = stock;
    this.categoryId = categoryId;
    this.sku = sku;
    this.id = id;
  }
}

module.exports = Product;
