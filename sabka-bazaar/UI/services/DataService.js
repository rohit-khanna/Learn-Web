/**
 * PURPOSE      :  This is the Data Service which is used to fetch all data from SERVER
 *
 * AUTHOR       :   Rohit Khanna
 *
 * LICENSE      :   PUBLIC
 *
 */

"use strict";

class DataService {
  constructor(DALObject) {
    this.dalObj = DALObject;
    this.endpointArray = {
      banner: "http://localhost:5000/banners",
      category: "http://localhost:5000/categories",
      products: "http://localhost:5000/products",
      addToCart: "http://localhost:5000/addToCart"
    };
  }

  async _handleDALResponse(res) {
    if (res.status === 200 || res.status === 201) {
      let result = await res.json();
      return result;
    } else {
      throw {
        status: res.status,
        message: res.statusText
      };
    }
  }

  fetchBannersAsync() {
    return new Promise(async (resolve, reject) => {
      this.dalObj
        .findAll(this.endpointArray.banner)
        .then(res => {
          return this._handleDALResponse(res);
        })
        .then(output => {
          resolve(output);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  fetchCategoriesAsync() {
    return new Promise(async (resolve, reject) => {
      this.dalObj
        .findAll(this.endpointArray.category)
        .then(res => {
          return this._handleDALResponse(res);
        })
        .then(output => {
          resolve(output);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  fetchProductsAsync() {
    return new Promise(async (resolve, reject) => {
      this.dalObj
        .findAll(this.endpointArray.products)
        .then(res => {
          return this._handleDALResponse(res);
        })
        .then(output => {
          resolve(output);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
}

module.exports = DataService;
