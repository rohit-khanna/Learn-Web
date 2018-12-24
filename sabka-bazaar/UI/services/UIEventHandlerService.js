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

class EventHandlerService {
  constructor() {}

  /**
   * Button Click Handler for Product Category Quick Link.
   * This will picks up the CLicked Product category ID, and launch the
   * PLP page with the cat_id as Query String
   * @param {*} event Event Object
   */
  productCategoryQuickLinkBUttonClick(event) {
    // console.log(event.target.parentNode.parentNode.id);
    window.location.href =
      "../plp/index.html?cat_id=" + event.target.parentNode.parentNode.id;
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
      element.next(".filter_list").slideToggle(300, function() {
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

  productClick(event)
  {
    console.log('Button for Product ID:',event.currentTarget.id);
    
    
  }
}

export default EventHandlerService;
