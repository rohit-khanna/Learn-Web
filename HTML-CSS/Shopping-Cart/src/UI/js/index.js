//import obj from "../../backend/services/ShoppingCartService";
//let cart = obj.cart;

import ShoppingCartService from "../../backend/services/ShoppingCartService";
let obj = new ShoppingCartService();
let cart = obj.cart;

$(function() {
  console.log("JQuery Ready");
  initializeShoppingCartPage();
  registerEventMethods();
});

/**
 * methods to register html element events for this cart
 */
function registerEventMethods() {
  $(".checkout-button>div>.button--primary").on("click", function() {
    alert("Checkout Button Clicked");
  });

  $(".checkout-button>div>.button--link").on("click", function() {
    alert("Continue Shopping Button Clicked");
  });

  $("#btnApplyCode").on("click", function(e) {
    let promoCodeValue = $("#txtPromo").val();
    if (promoCodeValue) {
      obj.applyPromoCode(promoCodeValue);
      updateUITotals();
      $("#discount")
        .siblings("label")
        .find($(".info"))
        .text("code applied: " + promoCodeValue);
    }
  });

  /**
   * Listen to Input Event to enable/disable Apply Button
   */
  document.getElementById("txtPromo").addEventListener("input", function(e) {
    onInputChange(e);
  });

  /**
   * MODAL EVENTS
   *
   */
  $("#myModal").on("click", function() {});
}

/**
 * function to Initialize the Shopping Cart and Load Initial Data
 */
async function initializeShoppingCartPage() {
  let c = await fetchServerCartInstance();

  if (cart) {
    //1. Create List Items
    createItemList();

    //2. Update UI Totals
    updateUITotals();
  } else {
    alert("cart not ready");
  }
}

/**
 * function to create List Items for ItemsList
 */
function createItemList() {
  //fetch UL element
  let itemsList = $(".section-items__list");

  //for each cart product in cart
  cart.cartProducts.forEach(prod => {
    let listItem = getListItemHTML(prod);
    itemsList.append(listItem);
  });

  //register events
  $(".section-items__listitem-action").on("click", function(event) {
    // console.log(event.currentTarget.dataset.id);

    if (event.target.name == "edit") {
      setModalData(event.currentTarget.dataset.id);
      document.getElementById("myModal").style.display = "block";
    } else if (event.target.name == "remove") {
      removeProductFromCart(event.currentTarget.dataset.id);
    }
  });

  $(".close").on("click", function() {
    document.getElementById("myModal").style.display = "none";
  });

  $(".item__quantity__value").on("change", function(event) {
    let listItemID =
      event.target.parentNode.parentNode.parentNode.parentNode.parentNode.id;

    //  console.log(event.target.value);

    obj.changeProductQuanity(listItemID, event.target.value);
    // console.log(cart.cartProducts);

    updateUITotals();
  });
}

/**
 * function to remove Product from the Cart
 * @param {*} productId productID to remove
 */
function removeProductFromCart(productId) {
  cart.removeProduct(productId);
  $("#" + productId).remove();
  updateUITotals();
  //console.log(cart.cartProducts);
}
/**
 * function to update the UI totals
 */
function updateUITotals() {
  $(".cart-header__item-count--value").text(cart.itemCount);
  $("#subtotal>.price>.price__value").text(
    parseFloat(cart.subTotal).toFixed(2)
  );
  $("#discount>.price>.price__value").text(
    parseFloat(-1 * cart.promoCodeDiscount).toFixed(2)
  );
  $("#estimatedTotal>.price>.price__value").text(cart.estimatedTotal);
}

/**
 * Set MODAL dialog Data
 * @param {*} id product ID Clicked by User
 */
function setModalData(id) {
  let product = cart.cartProducts.find(x => x.id == id);
  //console.log(product);

  if (product) {
    //set description
    $(".modal-content__container__details__description").text(
      product.prodDetails.description
    );

    //set price
    $(".modal-content__container__details__price .price >.price__value").text(
      product.prodDetails.price
    );

    $(".modal-content__container__image>img").attr(
      "src",
      product.prodDetails.image
    );

    //set Available Sizes List
    $("#availableSizes").empty();
    product.prodDetails.availableSizes.forEach(ele => {
      $("#availableSizes").append(
        `<option value=${ele}  ${
          product.size == ele ? "selected" : ""
        }>${ele}</option>`
      );
    });

    //set Quantity
    $("select#quantity").empty();
    [1, 2, 3, 4, 5].forEach(ele => {
      $("select#quantity").append(
        `<option value=${ele}  ${
          product.quantity == ele ? "selected" : ""
        }>QTY:${ele}</option>`
      );
    });

    //set Available Colours
    $(".modal-content__container__details__colors").empty();
    product.prodDetails.availableColors.forEach(ele => {
      $(".modal-content__container__details__colors").append(
        `<span data-color=${ele} title=${ele} class="box-color  ${
          ele == product.color ? "box-color--selected" : ""
        } box-color--${ele.toLowerCase()} ">&nbsp;</span>`
      );
    });

    //register Events
    $(".modal-content__container__details__colors").on("click", function(e) {
      //unselect current
      $(".box-color--selected").removeClass("box-color--selected");

      //select the new
      e.target.classList.add("box-color--selected");
    });

    $(".modal-content__container__details__EDIT>button").on(
      "click",
      function() {
        cart.editProduct(
          id,
          $(".box-color--selected")[0].dataset.color,
          $("#availableSizes")[0].value,
          $("#quantity")[0].value
        );

        // reload specific Preoduct Data
        reloadProductItemData(product);

        //2. Update UI Totals
        updateUITotals();

        document.getElementById("myModal").style.display = "none";
      }
    );
  } // end if
} // end setModalData

/**
 * function to Reload Product data when Dialog is closed with changes
 * @param {*} product new Product Data
 */
function reloadProductItemData(product) {
  let listItem = $(".section-items__listitem").filter(function(index) {
    return this.dataset.id == product.id;
  });

  listItem
    .find(".item__detail--color")
    .find("span")
    .text(product.color);

  listItem
    .find(".item__size")
    .find("span:last")
    .text(product.size);

  listItem.find(".item__quantity__value").val(product.quantity);
}

/**
 * function to fetch the ServerCart INstance and load Mock Data onto DB.
 * This sets the 'cart' variable
 */
async function fetchServerCartInstance() {
  //cart = getMockData();
  return new Promise(async (resolve, reject) => {
    let c = await obj.__loadSampleProductData([0, 24.5, 0, 5.55]);
    resolve(c);
  });
}

/**
 * Function to Create and return
 * a ListItem stringnusing the input object
 * @param {*} param0
 */
function getListItemHTML({
  quantity,
  id,
  size,
  color,
  prodDetails,
  specialPrice
}) {
  return `<li class="section-items__listitem" data-id=${id} id=${id}>
  <article class="section-items__listitem-box">
    <!-- FB1 -->
    <img
      alt="item image"
      src=${prodDetails.image}
      class="item-image"
    />
    <section class="item">
      <!-- FB2 -->
      <div class="item__detail">
        <div tabindex="5" class="item__detail--description">
          ${prodDetails.description}
        </div>
        <div tabindex="6" class="item__detail--style">${prodDetails.style}</div>
        <div tabindex="7" class="item__detail--color">
          Color: <span> ${color} </span>
        </div>
      </div>
      <div class="container">
        <div
          tabindex="8"
          aria-label="Size:M"
          class="item__size"
        >
          <span> Size: </span> <span>${size}</span>
        </div>
        <div class="item__quantity">
          <label for="item__quantity__value"
            ><span> qty: </span></label
          >
          <input
            id="item__quantity__value"
            type="number"
            min="1"
            max="5"
            tabindex="9"
  value=${quantity}
            name="Quantity of item"
            aria-label="item quantity"
            class="item__quantity__value"
          />
        </div>
        <div class="item__price">
          <div
            class="price"
            tabindex="10"
            aria-label="item price: $79.00"
          >
          ${
            specialPrice > 0
              ? ` <span class="price__curr--strike">$</span>
          <span class="price__value--strike"><s>${parseFloat(
            prodDetails.price
          ).toFixed(2)}</s></span>
            <p>
            <div class="price__curr">$</div>
            <div class="price__value">${parseFloat(specialPrice).toFixed(
              2
            )}</div>
            </p>
          </div>`
              : `
            <div class="price__curr">$</div>
            <div class="price__value">${parseFloat(prodDetails.price).toFixed(
              2
            )}</div>
         
          </div>`
          }
         
        </div>
      </div>
      <div class="section-items__listitem-action lg" data-id=${id} >
        <button name="edit" class="button button--action rb" title="Click to Edit">Edit</button>
        <button name="remove" class="button button--action rb" title="Click to Remove from Cart">X Remove</button>
        <button name="save" class="button button--action" title="Save for later">Save for Later</button>
      </div>
    </section>
  </article>
  <div class="section-items__listitem-action sm" data-id=${id}>
    <button name="edit" class="button button--action rb" title="Click to Edit">Edit</button>
    <button name="remove" class="button button--action rb" title="Click to Remove from cart">X Remove</button>
    <button name="save" class="button button--action" title="Save for later">Save for Later</button>
  </div>
</li>`;
}

/**
 * Handler for Input Change for Promo Code textbox
 * @param {*} e event Object
 */
function onInputChange(e) {
  let applyPromoBtn = document.querySelector("#btnApplyCode");
  let value = e.target.value;
  console.log(value);

  if (!value) {
    applyPromoBtn.setAttribute("disabled", true);
    applyPromoBtn.classList.add("disabled");
  } else {
    applyPromoBtn.removeAttribute("disabled");
    applyPromoBtn.classList.remove("disabled");
  }
}
