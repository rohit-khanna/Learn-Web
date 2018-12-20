/**
 * PURPOSE      :  This is the Shopping Cart Service.
 *
 * NOTES/COLOR SCHEME    :
 *
 * AUTHOR       :   Rohit Khanna
 *
 * LICENSE      :   PUBLIC
 *
 */
"use strict";

const fetchDal = require("./FetchDAL");
const DataService = require("./DataService");

class ShoppingCartService {
  constructor() {   
    this.dataService = new DataService(new fetchDal());
    this.banners = [];
    this.categories = [];
    this.products = [];
  }

  loadMockDataAsync() {
    return Promise.all([
      this._fetchBanners(),
      this._fetchCategories(),
      this._fetchProducts()
    ]);
  }

  async _fetchBanners() {
    this.banners = await this.dataService.fetchBannersAsync();
    return Promise.resolve();
  }
  async _fetchCategories() {
    this.categories = await this.dataService.fetchCategoriesAsync();
    return Promise.resolve();
  }
  async _fetchProducts() {
    this.products = await this.dataService.fetchProductsAsync();
    return Promise.resolve();
  }
}

module.exports = ShoppingCartService;
