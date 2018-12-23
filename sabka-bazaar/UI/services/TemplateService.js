/**
 * PURPOSE      :  This is the Template service to provide the Template for UI
 *
 * AUTHOR       :   Rohit Khanna
 *
 * LICENSE      :   PUBLIC
 *
 */
"use strict";

class TemplateService {
  /**
   * This method is used to fetch the Template String
   * for Offer-Banner UI
   */
  fetchBannerOfferTemplate() {
    return {
      offers: ({ id, bannerImageUrl, bannerImageAlt }) => {
        return ` <li id='${id}'><img src='../..${bannerImageUrl}' alt=${bannerImageAlt} /></li>`;
      },
      navButton: (id, checked) =>
        `<input type="radio"  name="images" id="radio-${id}" ${
          checked ? "checked" : ""
        } />`,
      navLabel: id =>
        `  <label for="radio-${id}" id="dotForRadio-${id}"></label>`
    };
  }
}

let instance = new TemplateService();

// module.exports = instance;
export default instance;
