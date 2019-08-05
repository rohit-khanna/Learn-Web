/**
 * PURPOSE      :   This is the DAL layer with Generic 'Fetch API' Implementation
 *
 * AUTHOR       :   Rohit Khanna
 *
 * LICENSE      :   PUBLIC
 *
 */

"use strict";
//const fetch = require("node-fetch"); // to run fetch over NodeJS
const fetch = require("node-fetch"); // to run fetch over NodeJS


class FetchDAL {
  /**
   * Initializes the FetchDAL Instance
   * @param {*} remote_db_url URL for Remote Db Server/Service
   */
  constructor(remote_db_url) {
    this.url = remote_db_url;
  }

  /**
   * Save a New Entity
   * @param {*} entityData  entity Object
   */
  async save(entityData) {
    let res = await fetch(this.url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      },
      body: JSON.stringify(entityData)
    });
    return res;
  }

  /**
   * Fetch All Entities
   */
  async findAll() {
    let res = await fetch(this.url);
    return res;
  }

  /**
   * Find Entity By ID
   * @param {*} id identifier
   */
  async findById(id) {
    let res = await fetch(this.url + "/" + id);
    return res;
  }

  test(){
    console.log('yess');
    
  }
  /**
   * Update the Entity Object
   * @param {*} entityObject
   */
  async update(entityObject) {
    let res = await fetch(this.url + "/" + entityObject.id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      },
      body: JSON.stringify(entityObject)
    });
    return res;
  }

  /**
   * Remove the Entity Object
   * @param {*} id
   */
  async removeById(id) {
    let res = await fetch(this.url + "/" + id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      }
    });
    return res;
  }
}

module.exports = FetchDAL;
