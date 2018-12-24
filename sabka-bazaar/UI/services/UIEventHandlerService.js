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
}

export default EventHandlerService;
