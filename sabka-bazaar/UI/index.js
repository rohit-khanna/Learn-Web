async function getf() {
  let obj = require("./model/ShoppingCart");
  let inst = await obj.GetCartInstanceAsync();


 inst.api.fetchProductDetails.call(inst);
}

getf();
