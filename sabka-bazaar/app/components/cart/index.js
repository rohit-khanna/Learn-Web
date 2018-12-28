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

const ShoppingCart = require("../../model/ShoppingCart").default;

class CartController {
  constructor(shoppingCartDataObject, templateSVcInstance,eventHandlerSvcImstance) {
    this.dataObject = shoppingCartDataObject;
    this.templateSvc = templateSVcInstance;
    this.eventHandlerSvc=eventHandlerSvcImstance;
    
  }

  init() {
    if (this.dataObject) {
      // update Items COunt on Header
      this.updateItemsCounterOnHead();
      // Create New List items as per products
      this.populateCartItems();
      // register their events for + and -
      this.registerCartItemEvents();

      this.updateTotalsInCheckoutButton();

      $(".checkout .btn").on("click", function() {
        alert("Checkout Done");
      });
    }
  }

  updateItemsCounterOnHead() {
    $(".header h3 span").text(this.dataObject.itemCount);
  }

  updateTotalsInCheckoutButton() {
      
    $("#checkout")
      .children("span")
      .last("span")
      .text("Rs" + this.dataObject.total);
  }

  populateCartItems() {
    this.dataObject.cartProducts.forEach(prod => {
      let template = this.templateSvc.fetchShoppingCartItemsTemplate(prod);
      $(".cart-items .cart-items__list").append(template);
    });
  }

  refreshCartItem(liItem, dataObj) {
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
  }

  registerCartItemEvents() {
    $(".cart-items .cart-items__list").on("click", e => {


      let parentLi = $(e.target).closest(".cart-items__list-item");


      let quantity = 0;
      if ($(e.target).hasClass("material-icons")) {


        ShoppingCart.GetCartInstanceAsync(this.dataObject).then(
          shoppingCartInstance => {

            switch (
              $(e.target)
                .text()
                .trim()
            ) {
              case "add_circle":
                quantity = shoppingCartInstance.incrementProductQuantity(
                  e.target.parentNode.parentNode.id
                );
                break;
              case "remove_circle":
                quantity = shoppingCartInstance.decrementProductQuantity(
                  e.target.parentNode.parentNode.id
                );
                break;
              default:
                break;
            }  
            
            this.dataObject=shoppingCartInstance;
            this.refreshCartItem(parentLi, {
              data: shoppingCartInstance.fetchProductDetails(
                e.target.parentNode.parentNode.id
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
}

const savedCartInstance = sessionStorage.getItem("cartInstance");
//console.log(savedCartInstance);

if (savedCartInstance) {
  new CartController(JSON.parse(savedCartInstance), instance,new EventHandlerService()).init();
}
