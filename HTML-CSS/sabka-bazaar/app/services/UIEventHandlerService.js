/**
 * PURPOSE      :  This is the Ui Event Handler Service
 *
 * NOTES/COLOR SCHEME    :
 *
 * AUTHOR       :   Rohit Khanna
 *
 * LICENSE      :   PUBLIC
 *
 */

const ShoppingCart = require("../model/ShoppingCart").default;

class EventHandlerService {
  constructor() {}

  /**
   * Button Click Handler for Product Category Quick Link.
   * This will picks up the CLicked Product category ID, and launch the
   * PLP page with the cat_id as Query String
   * @param {*} event Event Object
   */
  productCategoryQuickLinkBUttonClick(event) {
    window.location.href =
      "./plp.html?cat_id=" + event.target.parentNode.parentNode.id;
  }

  refreshTotalItemsCount(shoppingCartInstance) {
    let totalItemCount = shoppingCartInstance.itemCount;
    $(".header__cart__item-count--value .value").text(totalItemCount);
  }

  /**
   * Handles the filter Top Bar Header Click
   * @param {*} filterValue
   * @param {*} isRequestFromCode
   */
  categoryFilterHeaderClick(filterValue, isRequestFromCode) {
    var element = $(
      ".plp__section__category__filter__container .filter-header"
    );

    if (!isRequestFromCode) {
      //element.next(".filter_list").toggleClass("hidden");
      element.next(".filter_list").slideToggle(400, function() {
        if ($(this).css("display") === "block") {
          element
            .children(".icon")
            .children("i")
            .text("keyboard_arrow_up");
        } else {
          element
            .children(".icon")
            .children("i")
            .text("keyboard_arrow_down");
        }
      });
    }

    if (filterValue) element.children(".filter-name").text(filterValue);
  }

  /**
   * handles the Top Bar FIlter Item Click
   * @param {*} element
   */
  categoryFilterListItemClick(element) {
    let filtername = "";
    let categoryId = -1;
    if (
      $(element)
        .children(".icon")
        .children("i")
        .hasClass("icon-selected")
    ) {
      // case of Unset the Filter
      filtername = "Select a filter";
      categoryId = -1;
    } else {
      // new filter Selected By User
      filtername = $(element)
        .children(".filter-name")
        .text();
      // clear All Selected Classes
      $(".plp__section__category__filter__container .filter_list li")
        .children(".icon")
        .children("i")
        .removeClass("icon-selected");

      categoryId = $(element)[0].id;
    }

    // add this as Selected
    $(element)
      .children(".icon")
      .children("i")
      .toggleClass(" icon-selected");
    return {
      filtername: filtername,
      categoryId: categoryId
    };
  }

  productClick(event) {
    //console.log("Button for Product ID:", event.currentTarget.id);
    let cartInstance = JSON.parse(sessionStorage.getItem("cartInstance"));
    //console.log(cartInstance);
    ShoppingCart.GetCartInstanceAsync(cartInstance)
      .then(async shoppingCartInstance => {
        //console.log("Making a POST");
        let response = await shoppingCartInstance.postAddToCart(event.currentTarget.id);
        //console.log("POSt Done");
        //console.log(response);
        return shoppingCartInstance;
      })
      .then(shoppingCartInstance => {
        shoppingCartInstance.addProduct(event.currentTarget.id);
        //console.log(shoppingCartInstance);
        sessionStorage.setItem(
          "cartInstance",
          JSON.stringify(shoppingCartInstance)
        );
        this.refreshTotalItemsCount(shoppingCartInstance);
      });
  }

  /**
   * this method handles the corousal dots click.
   * This will translate the images
   * @param {*} event
   */
  corousalDotsClick(event) {
    let id = event.target.id.toString().split("dotForRadio-")[1];
    $(event.target.parentNode)
      .children()
      .removeClass();
    $(event.target).addClass("selected");

    let ul = $(event.target.parentNode.parentNode).children(".images");
    let transformPx =
      (id - 1) *
      parseFloat(
        $(ul)
          .children()
          .first()
          .css("width")
      );

    $(".section__corousal .corousal .images").css(
      "transform",
      `translate(${-1 * transformPx}px,0)`
    );
  }

  corousalPrevBtnClick() {
    let selectedDot = $(
      ".section__corousal .corousal .slidesNavigation"
    ).children("label.selected");
    let id = selectedDot[0].id.toString().split("dotForRadio-")[1];
    let ele = "";
    if (id == 1) {
      // left endpoint
      ele = $(".section__corousal .corousal .slidesNavigation")
        .children()
        .last();
    } else {
      ele = selectedDot.prev();
    }

    this.corousalDotsClick({ target: ele[0] });
  }

  corousalNextBtnClick() {
    let selectedDot = $(
      ".section__corousal .corousal .slidesNavigation"
    ).children("label.selected");
    let id = selectedDot[0].id.toString().split("dotForRadio-")[1];
    let ele = "";
    if (
      id ==
      $(".section__corousal .corousal .slidesNavigation").children().length
    ) {
      // right endpoint
      ele = $(".section__corousal .corousal .slidesNavigation")
        .children()
        .first();
    } else {
      ele = selectedDot.next();
    }

    this.corousalDotsClick({ target: ele[0] });
  }

  /**
   * handler for SHoppingCart button click on Page
   * @param {*} idOfModelContainer ID of container where cart needs to be loaded
   */
  shoppingCartDisplayHandler(idOfModelContainer) {
    if ($("#" + idOfModelContainer)[0].dataset.content == "true") {
      // content present
      // unload it

      $("#" + idOfModelContainer).html("");
      $("#" + idOfModelContainer)[0].dataset.content = "false";
      $("body").css("overflow", "auto"); // enable scrroling background
    } else {
      $("#" + idOfModelContainer)[0].dataset.content = "true";
      $("#" + idOfModelContainer).load("./cart.html");
      $("body").css("overflow", "hidden"); //stop scrroling background
    }
    $(".header__cart__item-count").toggleClass("util_cartbutton_clicked");
  }
}

export default EventHandlerService;
