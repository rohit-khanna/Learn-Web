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
      offers: ({ id, bannerImageUrl, bannerImageAlt }, width) => {
        return ` <li  width=${width}% id='${id}'><img src='../..${bannerImageUrl}' alt=${bannerImageAlt} /></li>`;
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

  /**
   * This method is used to Fetch the Template String
   * for Category Filter Links
   */
  get fetchCategoryFilterTemplate() {
    return {
      topBar: ({ id, name }) => ` <li id='${id}'>
      <span class="icon"> <i class="material-icons"> done </i> </span>
      <span class="filter-name"> ${name} </span>
    </li>`,
      sideBar: ({ id, name }) => ` <li  title=' ${name}' id='${id}'>
     ${name}
    </li>`
    };
  }

  fetchProductsTemplate({ name, imageURL, price, description, id }) {
    return ` <div class="plp__section__products__product-row" id=${id}>
    <h2 title='${name}'>${name}</h2>

    <div class="plp__section__products__product-row__content">
      <img
        src="../..${imageURL}"
        alt='${name}' title='${name}'
      />
      <div class="details">
        <p title=  '${description}'>
        ${description.substr(0, 180)}
        </p>
        <div class="button-area">
          <span> MRP Rs. ${price} </span>
          <button title='Buy Now' id=${id}>
            Buy Now <span class"util__mobile">@ MRP Rs. ${price}</span>
          </button>
        </div>
      </div>
    </div>
  </div>`;
  }

  fetchShoppingCartItemsTemplate({
    id,
    quantity,
    prodDetails: { price },
    prodDetails: { name },
    prodDetails: { imageURL }
  }) {
    //console.log(imageURL);

    return `     <li class="cart-items__list-item" >
    <img src="../..${imageURL}" />
    <article class="details">
      <h3>${name}</h3>
      <div class="edit__box" id='${id}'>
      <div class="counters">
    
        <a href="#"> <i class="material-icons"> remove_circle </i></a>
        <label>${quantity}</label>
        <a href="#"><i class="material-icons"> add_circle </i></a>
      
         </div>  <span>X &nbsp;Rs.&nbsp; ${price}</span> 
      </div>
    </article>
    <article class="price">Rs.<span class="newClass">${quantity *
      price}</span></article>
  </li>`;
  }
}

let instance = new TemplateService();

// module.exports = instance;
export default instance;
