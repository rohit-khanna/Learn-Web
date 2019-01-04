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
import "whatwg-fetch";

class FetchDAL {
  constructor() {}

  /**
   * Fetch All Entities
   */
  async findAll(endpoint) {
    let res = await fetch(endpoint);
    return res;
  }

  /**
   * Save
   * @param {*} endpoint endpoint of service
   */
  async save(endpoint, data) {
    let res = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "text/plain; charset=utf-8"
      },
      body: JSON.stringify(data)
    });
    return res;
  }
}

// module.exports = FetchDAL;
export default FetchDAL;
