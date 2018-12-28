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
    if (!Array.prototype.SortByOrder) {
      Array.prototype.SortByOrder = function() {
        this.sort((a, b) => a.order - b.order);
      };
    }
  }

  render() {
    let categoryID = this.getUrlParameter("cat_id");

    $().ready(() => {
      // 1. refreshTotalItemsCount
      this.refreshTotalItemsCount();

      //2. Fetch Categories and Populate Category FIlter
      this.populateCategoryFilters();

      //3. Apply Filters
      this.applyCategoryFilter(categoryID);

      this.registerShoppingCartDisplayEvents();
    });
  }

  registerShoppingCartDisplayEvents() {
    $(".header__cart__item-count--logo").on("click", () => {
      this.eventHandlerService.shoppingCartDisplayHandler('cartContainer');
    });
    $(".header__cart__item-count--value").on("click", e => {
      this.eventHandlerService.shoppingCartDisplayHandler('cartContainer');
    });
  }
  /**
   * method to fetch teh Queyr Params from URL
   * @param {*} name key to search
   */
  getUrlParameter(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
    var results = regex.exec(location.search);
    return results === null
      ? -1
      : decodeURIComponent(results[1].replace(/\+/g, " "));
  }

  /**
   * This method will filter the Products based on Ctaegory ID.
   * If Cat_ID:-1, fetch ALL
   * @param {*} categoryId
   */
  applyCategoryFilter(categoryId) {
    //1. Select the Ui ELement with input Cat ID;
    $(".plp__section__category__filter__container .filter_list")
      .children()
      .toArray()
      .forEach(element => {
        if (element.id == categoryId) {
          let {
            filtername
          } = this.eventHandlerService.categoryFilterListItemClick(element);
          this.eventHandlerService.categoryFilterHeaderClick(filtername, true);
        }
      });

    $(".plp__section__category__filter__bar ul")
      .children()
      .toArray()
      .forEach(e => {
        if (e.id == categoryId) {
          $(".plp__section__category__filter__bar ul")
            .children()
            .removeClass("util_link_selected--text");

          $(e).addClass("util_link_selected--text");
        }
      });

    //2. Filter Products

    this.rePopulateProductsList(categoryId);
  }

  rePopulateProductsList(categoryId) {
    //1. clear Current Items
    $(".plp__section__products").empty();
    //2. populate New Filtered Items
    this.populateProductsFromService(categoryId);
  }

  /**
   * Populate products from Service and Update in Ui
   * @param {*} categoryId
   */
  populateProductsFromService(categoryId) {
    //1. fetch Items from service
    if (
      this.shoppingCartInstance.serviceInstance.products &&
      this.shoppingCartInstance.serviceInstance.products.length > 0
    ) {
      let filteredProducts = this.shoppingCartInstance.serviceInstance.products;

      //  console.log(filteredProducts, categoryId);

      if (categoryId != -1) {
        filteredProducts = this.shoppingCartInstance.serviceInstance.products.filter(
          x => x.category === categoryId
        );
      }

      this.populateProductsOnUI(filteredProducts);
      this.registerProductClickEvent();

      // this.registerFilterClickEvents();
    } else {
      console.log("nothing");
    }
  }
  registerProductClickEvent() {
    $(".plp__section__products__product-row").on("click", e => {
      // console.log(e.target.id);
      if (event.target.nodeName == "BUTTON")
        this.eventHandlerService.productClick(event);
    });
  }

  /**
   * populateProductsOnUI
   * @param {*} arrayOfProducts
   */
  populateProductsOnUI(arrayOfProducts) {
    arrayOfProducts.forEach(element => {
      let template = this.instance.fetchProductsTemplate(element);
      $(".plp__section__products").append(template);
    });
  }

  /**
   * This method is used to Populate Category Filters
   */
  populateCategoryFilters() {
    if (
      this.shoppingCartInstance.serviceInstance.categories &&
      this.shoppingCartInstance.serviceInstance.categories.length > 0
    ) {
      this.populateCategoryList(
        this.instance.fetchCategoryFilterTemplate,
        this.shoppingCartInstance.serviceInstance.categories.filter(
          x => x.enabled
        )
      );

      this.registerFilterClickEvents();
    }
  }

  /**
   * register Click Events of Filter Items
   */
  registerFilterClickEvents() {
    $(".plp__section__category__filter__container .filter-header").on(
      "click",
      () => {
        this.eventHandlerService.categoryFilterHeaderClick();
      }
    );

    var self = this;

    $(".plp__section__category__filter__container .filter_list li").on(
      "click",
      function() {
        let {
          filtername,
          categoryId
        } = self.eventHandlerService.categoryFilterListItemClick(this);

        self.rePopulateProductsList(categoryId);

        // close the filter list
        self.eventHandlerService.categoryFilterHeaderClick(filtername);
      }
    );

    $(".plp__section__category__filter__bar ul li").on("click", function(e) {
      let {
        filtername,
        categoryId
      } = self.eventHandlerService.categoryFilterListItemClick(this);
      self.rePopulateProductsList(categoryId);

      $(".plp__section__category__filter__bar ul")
        .children()
        .removeClass("util_link_selected--text");
      $(e.target).addClass("util_link_selected--text");
    });
  }

  /**
   * Methos to Populate the Catgeory List on UI
   * @param {*} templateFn
   * @param {*} arrayOfCategories
   */
  populateCategoryList(templateFn, arrayOfCategories) {
    // console.log(arrayOfCategories);

    arrayOfCategories.SortByOrder();

    let topBarFilter = $(".plp__section__category__filter__container");
    let sideBarFilter = $(".plp__section__category__filter__bar");

    if (topBarFilter) {
      arrayOfCategories.forEach(ele => {
        let template = templateFn.topBar(ele);
        $(topBarFilter)
          .children(".filter_list")
          .append(template);
      });
    }
    if (sideBarFilter) {
      arrayOfCategories.forEach(ele => {
        let template = templateFn.sideBar(ele);
        $(sideBarFilter)
          .children("ul")
          .append(template);
      });
    }
  }

  /**
   * Refresh Total Items in Header
   */
  refreshTotalItemsCount() {
    let totalItemCount = this.shoppingCartInstance.itemCount;
    $(".header__cart__item-count--value .value").text(totalItemCount);
  }
}

let cartInstance = JSON.parse(sessionStorage.getItem("cartInstance"));

if (!cartInstance) {
  ShoppingCart.GetCartInstanceAsync()
    .then(shoppingCartInstance => {
      let eventHandlerService = new EventHandlerService();
      let controller = new UIController(
        shoppingCartInstance,
        instance,
        eventHandlerService
      );

      sessionStorage.setItem(
        "cartInstance",
        JSON.stringify(shoppingCartInstance)
      );
      controller.render();
    })
    .catch(err => {
      console.error("Error While Creating Instance", err);
    });
} else {
  let eventHandlerService = new EventHandlerService();
  let controller = new UIController(
    cartInstance,
    instance,
    eventHandlerService
  );

  controller.render();
}
