# Shopping Cart
---
### Core Functionality 

create dynamic Shopping Bag module for an Ecommerce web application.	On first load Shopping bag should have some items. 


** Notes: ES6 syntax have been used and `.babelrc` file contains the config for babel-loader.

### User Interface

![UI for Shopping Cart](https://github.com/rohit-khanna/XT-Core/blob/master/Assignments/Shopping-Cart/UI-1.png)
![UI for Shopping Cart](https://github.com/rohit-khanna/XT-Core/blob/master/Assignments/Shopping-Cart/UI-2.png)
![UI for Shopping Cart](https://github.com/rohit-khanna/XT-Core/blob/master/Assignments/Shopping-Cart/UI-3.png)
![UI for Shopping Cart](https://github.com/rohit-khanna/XT-Core/blob/master/Assignments/Shopping-Cart/UI-4.png)
![UI for Shopping Cart](https://github.com/rohit-khanna/XT-Core/blob/master/Assignments/Shopping-Cart/UI-5.png)
![UI for Shopping Cart](https://github.com/rohit-khanna/XT-Core/blob/master/Assignments/Shopping-Cart/UI-6.png)


#### Contents
- **src/backend/model/CartProduct.js** : This is the Model for Cart-Product(Product in UI)
- **src/backend/model/Product.js** : This is the Model for  Product (Product in DB)
- **src/backend/model/ShoppingCart.js** : This is the Model for ShoppingCart
- **src/backend/services/FetchDAL.js** : This is the DAL implementation using [node-fetch](https://www.npmjs.com/package/node-fetch)
- **src/backend/services/ProductService.js** : This is the Service for Product(DB) which uses a DAL, to interact with DB. 
- **src/backend/services/ShoppingCartService.js** : This is the Service for Shopping Cart. ***UI will interact with this service.***
- **src/UI/js/index.js** : This is the UI controller. It interacts wirh ShoppingCartService and also registers UI DOM events.
- **src/UI/css/fonts**  : This directory contains custom fonts
- **src/UI/css/sass**   : This directory contain SASS files, which on 'build' compiles into **src/UI/css/index.css** css file and a *.map file.*
- **src/UI/index.html** : This is the MAIN html Webpage


#### Test Cases
[Jasmine-JS](https://jasmine.github.io/) has been used for BDD. Test cases can be found at: [spec/backend](https://github.com/rohit-khanna/XT-Core/tree/master/Assignments/Shopping-Cart/spec/backend)

1.  `npm install`
2.  `babel-node spec/run.test.js` or `npm run test`

####  Steps to Run
1. Run the **Mock Server** : [Can be Taken out and Deployed Separately] - internally uses `json-server` module.  
    - use command line to navigate : **backend/services/mock-db-server** 
    - make sure `db.json`  is present
    - run `npm start`
    - now Db Server will be available at endpoint: http://localhost:3000/products

2. Run `npm run build`  to build SASS files into css
3. Run `webpack` to bundle all JS files into one.
4. Open **index.html** and use the cart...

##### References
- [Jasmine with ES6](https://fullstack-developer.academy/using-jasmine-with-javascript-es2015/)
- [CSS Modal](https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_modal)
- [Bootstrap Corousal](https://www.w3schools.com/bootstrap4/tryit.asp?filename=trybs_carousel)
- [Jasmine-JS](https://jasmine.github.io/)
- [node-fetch](https://www.npmjs.com/package/node-fetch)
- [json-server](https://www.npmjs.com/package/json-server)

