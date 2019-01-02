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

    $("#signup__password").on("input", e => {
      let passwordEle = $(e.target);
      let password = passwordEle[0];
      let newPwd = password.value.replace(" ", "");
      this.checkForEmptyControls();
      if (newPwd.length != password.value.length) {
        $("#space").addClass("invalid");
        $("#signup__password")
          .focus()
          .addClass("invalid");
      } else if (password.value.length < 6) {
        $("#length").addClass("invalid");
        $("#signup__password")
          .focus()
          .addClass("invalid");
      } else {
        $("#space").removeClass("invalid");
        $("#length").removeClass("invalid");
        $("#signup__password").removeClass("invalid");

        if (/[a-zA_Z]/.test(newPwd) && /\d/.test(newPwd)) {
          console.log('valid');
          
          $("#regex").removeClass("invalid");
        } else {
          console.log('invalid');
          
          $("#regex").addClass("invalid");
        }
      }
    });

    $("#signup__email").on("input", e => {
      let emailEle = $(e.target);
      let email = emailEle[0];

      this.checkForEmptyControls();
      if (email.validity.typeMismatch) {
        $("#email").addClass("invalid");
        $("#signup__email")
          .focus()
          .addClass("invalid");
      } else {
        $("#signup__email").removeClass("invalid");
        $("#email").removeClass("invalid");
      }
    });

    $("#btnSubmit").on("click", e => {
      e.preventDefault();
      this.checkForEmptyControls();

      if ($(".error-area").find(".invalid").length == 0) {
        $(".signup__section__form form").submit();
      }
    });
  }

  checkForEmptyControls() {
    if (!$("#signup__email").val()) {
      $("#empty").addClass("invalid");
      $("#signup__email").addClass("invalid");
    } else if (!$("#signup__password").val()) {
      $("#empty").addClass("invalid");
      $("#signup__password").addClass("invalid");
    } else {
      $("#empty").removeClass("invalid");
    }
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
