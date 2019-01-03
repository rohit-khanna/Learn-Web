import EventHandlerService from "../../services/UIEventHandlerService";
import "../../css/sass/main.scss";

class LoginController {
  constructor(dataObject, eventHandlerService) {
    this.eventHandlerService = eventHandlerService;
    this.dataObject = dataObject;
  }

  init() {
    $(".header__container").load("./header.html", () => {
      this.eventHandlerService.refreshTotalItemsCount(this.dataObject);
    });

    $(".signup__section__form form").on("input", e => {
      this.checkForEmptyControls(e.target.id, () => {
        if (e.target.id == "signup__password") {
          this.checkForPasswordEligibility("#signup__password");
        }
        if (e.target.id == "signup__email") {
          this.checkForEmailEligibility("#signup__email");
        }
      });
    });

    $("#btnSubmit").on("click", e => {
      e.preventDefault();

      this.checkForEmptyControls(null, () => {
        if ($(".error-area").find(".invalid").length == 0) {
          $(".signup__section__form form").submit();
        }
      });
    });
  }
  checkForPasswordEligibility(elementID) {
    let passwordEle = $(elementID);
    let password = passwordEle[0];
    let newPwd = password.value.replace(" ", "");

    if (newPwd.length != password.value.length) {
      $("#space").addClass("invalid");
      $(elementID)
        .focus()
        .addClass("invalid");
    } else if (password.value.length < 6) {
      $("#length").addClass("invalid");
      $(elementID)
        .focus()
        .addClass("invalid");
    } else {
      $("#space").removeClass("invalid");
      $("#length").removeClass("invalid");
      $(elementID).removeClass("invalid");

      if (/[a-zA_Z]/.test(newPwd) && /\d/.test(newPwd)) {
        $("#regex").removeClass("invalid");
      } else {
        $("#regex").addClass("invalid");
      }
    }
  }

  checkForEmailEligibility(elementID) {
    let emailEle = $(elementID);
    let email = emailEle[0];
    if (email.validity.typeMismatch) {
      $("#email").addClass("invalid");
      $(elementID)
        .focus()
        .addClass("invalid");
    } else {
      $(elementID).removeClass("invalid");
      $("#email").removeClass("invalid");
    }
  }

  checkForEmptyControls(elementID, cb) {
    const emptyValidationArray = ["#signup__email", "#signup__password"];

    let arrayToTest = [];

    if (elementID) {
      arrayToTest = emptyValidationArray.filter(x => x == "#" + elementID);
    } else {
      arrayToTest = emptyValidationArray;
    }
    arrayToTest.forEach(ele => {
      if (!$(ele).val()) {
        $("#empty").addClass("invalid");
        $(ele).addClass("invalid");
      } else {
        $(ele).removeClass("invalid");
      }
    });

    if (
      $(".signup__section__form form").find(".invalid").length == 0
    ) {
      // all invalids handled
      $("#empty").removeClass("invalid");
    }
    cb();
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
