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
  constructor() {}

  /**
   * Fetch All Entities
   */
  async findAll(endpoint) {
    let res = await fetch(endpoint);
    return res;
  }
}

module.exports = FetchDAL;
