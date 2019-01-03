import EventHandlerService from "../../services/UIEventHandlerService";
import "../../css/sass/main.scss";

class RegisterController {
  constructor(dataObject, eventHandlerService) {
    this.eventHandlerService = eventHandlerService;
    this.dataObject = dataObject;
  }

  init() {
    $(".header__container").load("./header.html", () => {
      this.eventHandlerService.refreshTotalItemsCount(this.dataObject);
    });

    $(".signup_register__section__form form").on("input", e => {
      this.checkForEmptyControls(e.target.id);
      if (e.target.id == "signup_register__password") {
        this.checkForPasswordEligibility("#signup_register__password");

        if ($("#signup_register__cpassword").val())
          this.checkPasswordConfirm(
            "#signup_register__cpassword",
            "#signup_register__password"
          );
      }
      if (e.target.id == "signup_register__email") {
        this.checkForEmailEligibility("#signup_register__email");
      }
      if (e.target.id == "signup_register__cpassword") {
        this.checkPasswordConfirm(
          "#signup_register__cpassword",
          "#signup_register__password"
        );
      }
    });

    $("#btnSubmit").on("click", e => {
      e.preventDefault();
      
      this.checkForEmptyControls();

      if ($(".error-area").find(".invalid").length == 0) {
        $(".signup_register__section form").submit();
      }
    });
  }

  checkForEmptyControls(elementID) {
    // let validationArray = [
    //   { id: "#signup_register__fname", validation: ["#empty"] },
    //   { id: "#signup_register__lname", validation: ["#empty"] },
    //   { id: "#signup_register__email", validation: ["#empty", "#email"] },
    //   {
    //     id: "#signup_register__password",
    //     validation: ["#empty", "#length", "#regex", "#space"]
    //   },
    //   { id: "#signup_register__cpassword", validation: ["#confirm"] },
    // ];

    const emptyValidationArray = [
      "#signup_register__fname",
      "#signup_register__lname",
      "#signup_register__email",
      "#signup_register__password",
      "#signup_register__cpassword"
    ];

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
      $(".signup_register__section__form form").find(".invalid").length == 0
    ) {
      // all invalids handled
      $("#empty").removeClass("invalid");
    }
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
  checkPasswordConfirm(elementID, elementIDToCompare) {

    if ($(elementID).val() == $(elementIDToCompare).val()) {
      $("#confirm").removeClass("invalid");
      $(elementID).removeClass("invalid");
    } else {
      $("#confirm").addClass("invalid");
      $(elementID).addClass("invalid");
    }
  }
}

const savedCartInstance = sessionStorage.getItem("cartInstance");

if (savedCartInstance) {
  $().ready(function() {
    new RegisterController(
      JSON.parse(savedCartInstance),
      new EventHandlerService()
    ).init();
  });
}
