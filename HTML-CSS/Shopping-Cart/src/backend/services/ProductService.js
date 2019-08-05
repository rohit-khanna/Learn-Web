/**
 * PURPOSE      :  This is the Service for Product . This interacts with Remote DB-Server
 *
 * AUTHOR       :   Rohit Khanna
 *
 * LICENSE      :   PUBLIC
 *
 */
"use strict";

class ProductService {
  /**
   * initializes the Product Service Object
   * @param {*} DALObject Object of DAL IMplmentation
   */
  constructor(DALObject) {
    this.dalObj = DALObject;
  }

  /**
   * Method to handle the response from DAL API call
   * @param {*} res Response Object from DAL Call
   */
  async _handleDALResponse(res) {
    if (res.status === 200 || res.status === 201) {
      let result = await res.json();
      return result;
    } else {
      throw "ServiceAPI Call failed. Status Code:" +
        res.status +
        "  " +
        res.statusText;
    }
  }

  /**
   * this is the Method to SAVE a product Entity.
   * <para>It Returns a Promise</para>
   * @param {*} productEntity new Product
   */
  async saveProductAsync(productEntity) {
  
    
    return new Promise((resolve, reject) => {
      this.dalObj
        .save(productEntity)
        .then(res => {
          return this._handleDALResponse(res);
        })
        .then(output => {
          resolve(output);
        })
        .catch(err => {
          reject(new Error("saveProductAsync():" + err));
        });
    });
  }

  /**
   * Find Specific Product
   * <para>It returns a PROMISE</para>
   * @param {*} id
   */
  async findProductAsync(id) {
    return new Promise((resolve, reject) => {
      this.dalObj
        .findById(id)
        .then(res => {          
          return this._handleDALResponse(res);
        })
        .then(output => {       
          resolve(output);
        })
        .catch(err => {         
          reject(new Error("findProductAsync():" + err));
        });
    });
  }

  /**
   * Find All Products
   * <para>It returns a PROMISE</para>
   */
  async findAllProductsAsync() {
    return new Promise((resolve, reject) => {
      this.dalObj
        .findAll()
        .then(res => {
          return this._handleDALResponse(res);
        })
        .then(output => {
          resolve(output);
        })
        .catch(err => {
          reject(new Error("findAllProductsAsync():" + err));
        });
    });
  }

  /**
   * Update the product
   * <para>It returns a PROMISE</para>
   * @param {*} product product to update
   */
  async updateProductAsync(product) {
    return new Promise((resolve, reject) => {
      this.dalObj
        .update(product)
        .then(res => {
          return this._handleDALResponse(res);
        })
        .then(output => {
          resolve(output);
        })
        .catch(err => {
          reject(new Error("updateProductAsync():" + err));
        });
    });
  }

  /**
   * Delete a Product
   * <para>It returns a PROMISE</para>
   * @param {*} id ID of product to delete
   */
  async deleteProductAsync(id) {
    return new Promise((resolve, reject) => {
      this.dalObj
        .removeById(id)
        .then(res => {
          return this._handleDALResponse(res);
        })
        .then(output => {
          resolve(output);
        })
        .catch(err => {
          reject(new Error("deleteProductAsync():" + err));
        });
    });
  }
}

export default ProductService;
