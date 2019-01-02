/**
 * PURPOSE      :  This is the Reusable header controller
 *
 * AUTHOR       :   Rohit Khanna
 *
 * LICENSE      :   PUBLIC
 *
 */
import EventHandlerService from "../../services/UIEventHandlerService";

class HeaderController {
  constructor(eventHandlerService) {
    this.eventHandlerService = eventHandlerService;
  }

  init() {
    this.registerHeaderEvents();
    this.checkForCurrentActivePage();
  }
  registerHeaderEvents() {
    $(".cart--toggle").on("click", () => {
      this.eventHandlerService.shoppingCartDisplayHandler("cartContainer");
    });
  }

  checkForCurrentActivePage() {
    //if(window.location.pathname.includes('login.html'))
    if (window.location.pathname.includes("login.html"))
      $(".header__cart__item-count .login a").addClass(
        "util_link_selected--text"
      );
      else  if (window.location.pathname.includes("register.html"))
      $(".header__cart__item-count .register a").addClass(
        "util_link_selected--text"
      );
      else  if (window.location.pathname.includes("plp.html"))
      $(".header__nav ul li a").last().addClass(
        "util_link_selected--text"
      );
      else
      {
        $(".header__nav ul li a").first().addClass(
            "util_link_selected--text"
          );
      }
  }
}

new HeaderController(new EventHandlerService()).init();
