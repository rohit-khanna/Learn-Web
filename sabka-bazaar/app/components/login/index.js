import EventHandlerService from "../../services/UIEventHandlerService";
import "../../css/sass/main.scss";

class LoginController {
  constructor(dataObject, eventHandlerService) {
    this.eventHandlerService = eventHandlerService;
    this.dataObject = dataObject;
  }

  init() {
    $(".header__container").load("./header.html",()=>{
        this.eventHandlerService.refreshTotalItemsCount(this.dataObject);        
    });
    
  }
}

const savedCartInstance = sessionStorage.getItem("cartInstance");

if (savedCartInstance) {
  $().ready(function() {
    new LoginController(
      JSON.parse(savedCartInstance),
      new EventHandlerService()
    ).init();
  });
}
