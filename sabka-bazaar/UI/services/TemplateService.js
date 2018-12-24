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

  /**
   * This method is used to Fetch Template string
   * for Product Category Quick Links
   */
  fetchProductCategoryQuickLinksTemplate() {
    return {
      quickLink: (
        { name, key, description, imageUrl, id },
        isReverse
      ) => ` <div class="home__section__prod-cat__quicklinks__row${
        isReverse ? "--reverse" : ""
      }" id=${id}>
      <img src='../..${imageUrl}' />
      <div class="content">
        <h2>${name}</h2>
        <p>${description}</p>
        <button aria-label='Explore ${name} '>Explore ${key}</button>
      </div>
    </div>`
    };
  }
}

let instance = new TemplateService();

// module.exports = instance;
export default instance;
