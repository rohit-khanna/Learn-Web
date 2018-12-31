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

import FetchDAL from "./FetchDAL";
import DataService from "./DataService";

class ShoppingCartService {
  constructor() {
    console.log('NEW SCSvc');
    
    this.dataService = new DataService(new FetchDAL());
    this.banners = [];
    this.categories = [];
    this.products = [];
    Array.prototype.SortByOrder=function(){
      this.sort((a, b) => a.order - b.order);
    }
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

// module.exports = ShoppingCartService;
export default ShoppingCartService;
