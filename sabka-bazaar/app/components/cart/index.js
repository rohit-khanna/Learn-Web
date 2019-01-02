/**
 * PURPOSE      :  This is the Cart  Data Controller
 *
 * AUTHOR       :   Rohit Khanna
 *
 * LICENSE      :   PUBLIC
 *
 */
import instance from "../../services/TemplateService";
import EventHandlerService from "../../services/UIEventHandlerService";
import "../../css/sass/main.scss";
const ShoppingCart = require("../../model/ShoppingCart").default;

class CartController {
  constructor(
    shoppingCartDataObject,
    templateSVcInstance,
    eventHandlerSvcImstance
  ) {
    this.dataObject = shoppingCartDataObject;
    this.templateSvc = templateSVcInstance;
    this.eventHandlerSvc = eventHandlerSvcImstance;
  }

  init() {
    this.registerCartEvents();

    if (this.dataObject) {
      // update Items COunt on Header
      this.updateItemsCounterOnHead();

      if (this.dataObject.cartProducts.length > 0) {
        this.showEmptyCart(false);
        // Create New List items as per products
        this.populateCartItems();
        // register their events for + and -
        this.registerCartItemEvents();

        this.updateTotalsInCheckoutButton();

        $(".checkout .btn").on("click", function() {
          alert("Checkout Done");
        });
      } else {
        this.showEmptyCart(true);
      }
    }
  }

  registerCartEvents() {
    $(".empty--cart button").on("click", e => {
      this.eventHandlerSvc.shoppingCartDisplayHandler(
        $(e.target).closest(".modal")[0].parentNode.id
      );
    });
    $(".modal-content .header .close").on("click", e => {
      this.eventHandlerSvc.shoppingCartDisplayHandler(
        $(e.target).closest(".modal")[0].parentNode.id
      );
      
    });
  }

  showEmptyCart(isEmpty) {
    if (isEmpty) {
      $(".cart-items").hide();
      $(".checkout").hide();
      $(".empty--cart").show();
    } else {
      $(".cart-items").show();
      $(".checkout").show();
      $(".empty--cart").hide();
    }
  }

  updateItemsCounterOnHead() {
    $(".header h3 span").text(this.dataObject.itemCount);
  }

  updateTotalsInCheckoutButton() {
    $("#checkout")
      .children("span")
      .last("span")
      .html("Rs &nbsp;" + this.dataObject.total);
  }

  populateCartItems() {
    this.dataObject.cartProducts.forEach(prod => {
      let template = this.templateSvc.fetchShoppingCartItemsTemplate(prod);
      $(".cart-items .cart-items__list").append(template);
    });
  }

  refreshCartItem(liItem, dataObj) {
    console.log(dataObj);

    if (dataObj.quantity == 0) {
      $(liItem).remove();
    } else {
      $(liItem)
        .find("label")
        .text(dataObj.quantity);
      $(liItem)
        .find(".price")
        .find("span")
        .text(dataObj.data.price * dataObj.quantity);
    }

    this.updateTotalsInCheckoutButton();
    this.updateItemsCounterOnHead();
    this.eventHandlerSvc.refreshTotalItemsCount(this.dataObject);
    if (this.dataObject.cartProducts.length <= 0) {
      this.showEmptyCart(true);
    }
  }

  registerCartItemEvents() {
    $(".cart-items .cart-items__list .counters").on("click", e => {
      let parentLi = $(e.target).closest(".cart-items__list-item");

      let quantity = 0;
      if ($(e.target).hasClass("material-icons")) {
        console.log($(e.target).text());

        ShoppingCart.GetCartInstanceAsync(this.dataObject).then(
          shoppingCartInstance => {
            switch (
              $(e.target)
                .text()
                .trim()
            ) {
              case "add_circle":
                quantity = shoppingCartInstance.incrementProductQuantity(
                  e.target.parentNode.parentNode.parentNode.id
                );
                break;
              case "remove_circle":
                quantity = shoppingCartInstance.decrementProductQuantity(
                  e.target.parentNode.parentNode.parentNode.id
                );
                break;
              default:
                break;
            }

            this.dataObject = shoppingCartInstance;
            this.refreshCartItem(parentLi, {
              data: shoppingCartInstance.fetchProductDetails(
                e.target.parentNode.parentNode.parentNode.id
              ),
              quantity: quantity
            });

            sessionStorage.setItem(
              "cartInstance",
              JSON.stringify(shoppingCartInstance)
            );
            console.log(shoppingCartInstance);
          }
        );
      }
    });
  }

  startShoppingClickHandler() {
    alert("jhs");
  }
}

const savedCartInstance = sessionStorage.getItem("cartInstance");
//console.log(savedCartInstance);

if (savedCartInstance) {
  new CartController(
    JSON.parse(savedCartInstance),
    instance,
    new EventHandlerService()
  ).init();
}
