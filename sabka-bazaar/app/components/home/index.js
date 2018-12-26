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
  registerNextPrevButtonHandlersForCorousal() {
    let prevButton = $(".section__corousal .corousal .prev");
    let nextButton = $(".section__corousal .corousal .next");

    prevButton.on("click", e => {
      e.preventDefault();
      this.eventHandlerService.corousalPrevBtnClick(e);
    });

    nextButton.on("click", e => {
      e.preventDefault();
      this.eventHandlerService.corousalNextBtnClick(e);
    });
  }

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
   * function to Create Corousal Nav and register 'dot' click events
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

    $(labelHolder)
      .children("label")
      .on("click", event => {
        this.eventHandlerService.corousalDotsClick(event);
      });

    $(labelHolder)
      .children("label")
      .first()
      .addClass("selected");
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
        let tempString = templateFn(
          offer,
          100 / parseFloat(arrayOfOffers.length)
        );
        offerList.append(tempString);
      }
    });
    let isMouseDown = false;
    let point = { start: 0, end: 0 };
    $(offerList)
      .children("li")
      .on("click", function(event) {
        // console.log(event.target); //IMG
        // console.log(event.currentTarget); // LI
      });

    offerList
      .children("li")
      .mousedown(function(e) {
        e.preventDefault();
        isMouseDown = true;
        point.start = e.pageX;
      })
      .mousemove(function(e) {
        e.preventDefault();
        if (!isMouseDown) return false;
        else {
          point.end = e.pageX;
        }
      })
      .mouseup(e => {
        e.preventDefault();
        isMouseDown = false;
        let fromLeftToRight = point.end - point.start > 0 ? true : false;
        point.end = 0;
        fromLeftToRight
          ? this.eventHandlerService.corousalPrevBtnClick()
          : this.eventHandlerService.corousalNextBtnClick();
      })
      .on("touchstart", e => {
        e.preventDefault();
        isMouseDown = true;
        point.start = e.touches[0].pageX;
      })

      .on("touchmove", e => {
        e.preventDefault();
        if (!isMouseDown) return false;
        point.end = e.touches[0].pageX;
      })
      .on("touchend", e => {
        e.preventDefault();
        if (!isMouseDown) return false;

        isMouseDown = false;      
        if (point.end > 0) {
          let fromLeftToRight = point.end - point.start > 10 ? true : false;

          fromLeftToRight
            ? this.eventHandlerService.corousalPrevBtnClick()
            : this.eventHandlerService.corousalNextBtnClick();
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

      $(".section__corousal .corousal .images").css(
        "width",
        `${this.shoppingCartInstance.serviceInstance.banners.length * 100}%`
      );

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
      this.registerNextPrevButtonHandlersForCorousal();
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
