/**
 * PURPOSE      :  This is the Model for Shopping Cart Object
 *
 * AUTHOR       :   Rohit Khanna
 *
 * LICENSE      :   PUBLIC
 *
 */
"use strict";

const CartProduct = require("./CartProduct");
const ShoppingCartService = require("./../services/ShoppingCartService");

class ShoppingCart {
  constructor() {
    this.cartProducts = []; // can be 2 products with 2 instances each: hence count=2
    this.itemCount = 0; // will be 4
    this.total = 0;
    this.serviceInstance = new ShoppingCartService();
  }

  /**
   * PUBLIC API
   */
   get api() {
    function addProduct(id) {
      let newProduct = new CartProduct(id);
      newProduct.prodDetails = fetchProductDetails(id);
      cartProducts.push(newProduct);
      this.itemCount++;
      incrementTotal(newProduct);
    }

    function removeProduct(id) {
      let product = this.cartProducts.find(x => x.id == id);

      for (let i = 0; i < product.quantity; i++) {
        this.itemCount--;
        decrementTotal(product);
      }
      let index = this.cartProducts.findIndex(p => p.id == id);
      this.cartProducts.splice(index, 1);
    }

    function editProduct(id, newQty) {
      let product = this.cartProducts.find(x => x.id == id);

      if (newQty) {
        let diff = newQty - product.quantity;

        if (diff == 0) {
          // do nothing
        } else {
          for (let i = 0; i < Math.abs(diff); i++) {
            diff > 0
              ? incrementProductQuantity(id)
              : decrementProductQuantity(id);
          }
        }
      }
    }

    function fetchProductDetails(id) {
    // ToDo
     console.log(this.itemCount);
     console.log(this.total);
     console.log(this.cartProducts);     
    }

    /**
     * method to Increment The Product Quantity in cart
     * @param {*} id cartProductId
     */
    function incrementProductQuantity(id) {
      let product = this.cartProducts.find(x => x.id == id);
      product.quantity += 1;
      this.itemCount += 1;
      this.incrementTotal(product);
    }

    function decrementProductQuantity(id) {
      let product = this.cartProducts.find(x => x.id == id);
      product.quantity -= 1;
      this.itemCount -= 1;
      this.decrementTotal(product);
    }

    function incrementTotal() {
      this.total += product.prodDetails.price;
    }

    function decrementTotal() {
      this.total += product.prodDetails.price;
    }
    return {
      addProduct: addProduct,
      removeProduct: removeProduct,
      editProduct: editProduct,
      fetchProductDetails: fetchProductDetails
    };

  }
}

module.exports = {
  GetCartInstanceAsync: async function() {
    let ins = new ShoppingCart();
    await ins.serviceInstance.loadMockDataAsync();
    return ins;
  }
};
