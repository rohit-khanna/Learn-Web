// async function getf() {
//   let obj = require("./model/ShoppingCart");
//   let inst = await obj.GetCartInstanceAsync();

//  inst.api.fetchProductDetails.call(inst);
// }

// getf();

"use strict";
const ShoppingCart = require("../../model/ShoppingCart").default;
import instance from "../../services/TemplateService";
let shoppingCartInstance;

//console.log(ShoppingCart);

$().ready(() => {
  // 1. Create Cart INstance
  ShoppingCart.GetCartInstanceAsync()
    .then(instance => {
      shoppingCartInstance = instance;
      //console.log(shoppingCartInstance);

      //2. Fetch Offers List BANNERS - POpulate The UI offers list-corousal
      populateOfferBannerList();

      //3. Register Corousal Events
      registerCorousalEvents();

      //4. Fetch Home page -Quick Links Data-- POpulate UI for Categories
      populateUIProductCategoryQuickLinks();

      //5. RefreshTotalItemsCount
      refreshTotalItemsCount();
    })
    .catch(err => {
      console.error("Error While Creating Instance", err);
    });
});

function registerCorousalEvents() {}

function refreshTotalItemsCount() {}

function populateUIProductCategoryQuickLinks() {}

/**
 * This function is used to Fetch Offers-Banners, fetch Template from Service and
 * then populate the data using templates
 */
function populateOfferBannerList() {
  /**
   * function to Create Corousal Nav
   * @param {*} labelTemplateFn tenplateFn for Label
   * @param {*} RadioTemplateFn tenplateFn for Radio
   * @param {*} offersCount totals Offers
   */
  function createNavigations(labelTemplateFn, RadioTemplateFn, offersCount) {
    let labelHolder = $(".section__corousal .corousal .slidesNavigation");
    let radioHolder = $(".section__corousal .corousal");

    for (let i = 0; i < offersCount; i++) {
      let tempStringLabel = labelTemplateFn(i+1);
      let tempStringRadio = RadioTemplateFn(i+1, i === 0);
      labelHolder.append(tempStringLabel);
      radioHolder.prepend(tempStringRadio);
    }
  }

  /**
   * function to Create Offers inside offer list container
   * @param {*} templateFn tenplate function for listitem
   * @param {*} arrayOfOffers array of Offers
   */
  function populateOffers(templateFn, arrayOfOffers) {
    let sortedArray = arrayOfOffers.sort((a, b) => a.order - b.order);
    let offerList = $(".section__corousal .corousal .images");
    // console.log(sortedArray);

    sortedArray.forEach(offer => {
      if (offer.isActive) {
        let tempString = templateFn(offer);
        offerList.append(tempString);
      }
    });
  }

  // 1. Fetch and Check Banners- Offers
  if (
    shoppingCartInstance.serviceInstance.banners &&
    shoppingCartInstance.serviceInstance.banners.length > 0
  ) {
    //2. Fetch Template String
    let listItemTemplate = instance.fetchBannerOfferTemplate();

    //3. PopulateThe Offers List
    populateOffers(
      listItemTemplate.offers,
      shoppingCartInstance.serviceInstance.banners
    );
    createNavigations(
      listItemTemplate.navLabel,
      listItemTemplate.navButton,
      shoppingCartInstance.serviceInstance.banners.length
    );
  }
}
