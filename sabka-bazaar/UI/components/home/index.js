/**
 * PURPOSE      :  This is the UI controller for Home Page
 *
 * AUTHOR       :   Rohit Khanna
 *
 * LICENSE      :   PUBLIC
 *
 */
"use strict";
const ShoppingCart = require("../../model/ShoppingCart").default;
import instance from "../../services/TemplateService";
import EventHandlerService from "../../services/UIEventHandlerService";

class UIController {
  constructor(
    ShoppingCartInstance,
    templateServiceInstance,
    eventHandlerService
  ) {
    this.shoppingCartInstance = ShoppingCartInstance;
    this.instance = templateServiceInstance;
    this.eventHandlerService = eventHandlerService;
  }

  /**
   * This is the Entry method to Render this Page
   */
  render() {
    //1. Fetch Offers List BANNERS - POpulate The UI offers list-corousal
    this.populateOfferBannerList();

    //2. Fetch Home page -Quick Links Data-- POpulate UI for Categories
    this.populateUIProductCategoryQuickLinks();

    //3. RefreshTotalItemsCount
    this.refreshTotalItemsCount();
  }

  /**
   * TODO
   */
  registerCorousalEvents() {}

  /**
   * This method is used to register the ProductCategoryQuickLinks
   * Events
   */
  registerProductCategoryQuickLinkEvents() {
    $(".home__section__prod-cat__quicklinks button").on("click", event =>
      this.eventHandlerService.productCategoryQuickLinkBUttonClick(event)
    );
  }

  /**
   * Refresh Total Items in Header
   */
  refreshTotalItemsCount() {
    let totalItemCount = this.shoppingCartInstance.itemCount;
    $(".header__cart__item-count--value .value").text(totalItemCount);
  }

  /**
   * function to Create Corousal Nav
   * @param {*} labelTemplateFn tenplateFn for Label
   * @param {*} RadioTemplateFn tenplateFn for Radio
   * @param {*} offersCount totals Offers
   */
  createNavigations(labelTemplateFn, RadioTemplateFn, offersCount) {
    let labelHolder = $(".section__corousal .corousal .slidesNavigation");
    let radioHolder = $(".section__corousal .corousal");

    for (let i = 0; i < offersCount; i++) {
      let tempStringLabel = labelTemplateFn(i + 1);
      let tempStringRadio = RadioTemplateFn(i + 1, i === 0);
      labelHolder.append(tempStringLabel);
      radioHolder.prepend(tempStringRadio);
    }
  }

  /**
   * function to Create Offers inside offer list container
   * @param {*} templateFn tenplate function for listitem
   * @param {*} arrayOfOffers array of Offers
   */
  populateOffers(templateFn, arrayOfOffers) {
    arrayOfOffers.SortByOrder();
    let offerList = $(".section__corousal .corousal .images");

    arrayOfOffers.forEach(offer => {
      if (offer.isActive) {
        let tempString = templateFn(offer);
        offerList.append(tempString);
      }
    });
  }
  /**
   * This function is used to Fetch Offers-Banners, fetch Template from Service and
   * then populate the data using templates
   */
  populateOfferBannerList() {
    // 1. Fetch and Check Banners- Offers
    if (
      this.shoppingCartInstance.serviceInstance.banners &&
      this.shoppingCartInstance.serviceInstance.banners.length > 0
    ) {
      //2. Fetch Template String
      let listItemTemplate = this.instance.fetchBannerOfferTemplate();

      //3. PopulateThe Offers List
      this.populateOffers(
        listItemTemplate.offers,
        this.shoppingCartInstance.serviceInstance.banners
      );
      this.createNavigations(
        listItemTemplate.navLabel,
        listItemTemplate.navButton,
        this.shoppingCartInstance.serviceInstance.banners.length
      );

      // Register Corousal Events
      this.registerCorousalEvents();
    }
  }

  /**
   * This method is used to Populate Products Category Quick Links
   */
  populateUIProductCategoryQuickLinks() {
    // 1. Check Data from service
    if (
      this.shoppingCartInstance.serviceInstance.categories &&
      this.shoppingCartInstance.serviceInstance.categories.length > 0
    ) {
      let enabledArray = this.shoppingCartInstance.serviceInstance.categories.filter(
        x => x.enabled
      );

      enabledArray.SortByOrder();

      //2. Create Quick Links
      enabledArray.forEach((element, index) => {
        this.createQuickLinksForProductCategories(element, index);
      });

      this.registerProductCategoryQuickLinkEvents();
    }
  }

  /**
   * Create Quick Links for Product Categories
   * @param {*} categoryObject
   * @param {*} index
   */
  createQuickLinksForProductCategories(categoryObject, index) {
    // fetch template string
    let itemTemplate = instance
      .fetchProductCategoryQuickLinksTemplate()
      .quickLink(categoryObject, index % 2 == 1);

    let quickLinksContainer = $(".home__section__prod-cat__quicklinks");
    quickLinksContainer.append(itemTemplate);
  }
}

// 1. Create Cart INstance
ShoppingCart.GetCartInstanceAsync()
  .then(shoppingCartInstance => {
    let eventHandlerService = new EventHandlerService();
    let controller = new UIController(
      shoppingCartInstance,
      instance,
      eventHandlerService
    );
    $().ready(function() {
      sessionStorage.setItem(
        "cartInstance",
        JSON.stringify(shoppingCartInstance)
      );
      controller.render();
    });
  })
  .catch(err => {
    console.error("Error While Creating Instance", err);
  });
