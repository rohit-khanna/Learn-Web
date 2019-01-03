# Sabka Bazar

## User Interface
The following sections define the User Interface
#### HTML
It contains the following pages:
- Home Page
- Products Listing Page (PLP)
- Mini Cart
- Login
- Register

#### To Run the Project
use
` npm run dev`
This will:
1. Compile CSS/JS into respective bundles
2. Create HTML files using templates, induce the above (Step-1) dependencies during runtime
3. Start The MOCK-SERVER to feed data
4. Power Up a local server [Live-server](https://www.npmjs.com/package/live-server) to serve the website  (http://127.0.0.1:8080)


 ##### Screen Prints
 Page | Screenshot | 
--- | --- |
**Home**| [Home Page](https://github.com/rohit-khanna/Learn-Web/blob/master/sabka-bazaar/screenprints/home.png") |
**PLP-MObile**|[PLP-Mobile]("https://github.com/rohit-khanna/Learn-Web/blob/master/sabka-bazaar/screenprints/plp-mobile.png") |
**PLP-Laptop**| [PLP-Laptop]("https://github.com/rohit-khanna/Learn-Web/blob/master/sabka-bazaar/screenprints/plp-laptop.png") |
**Cart-Empty-Mobile**|[empty cart mobile]("https://github.com/rohit-khanna/Learn-Web/blob/master/sabka-bazaar/screenprints/cart-empty-mobile.png") |
**cart-Laptop**| [cart laptop]("https://github.com/rohit-khanna/Learn-Web/blob/master/sabka-bazaar/screenprints/cart-laptop.png") |
**login-tablet**| [login Tablet]("https://github.com/rohit-khanna/Learn-Web/blob/master/sabka-bazaar/screenprints/login-tablet.png") |
**register-tablet**| [Register Tablet]("https://github.com/rohit-khanna/Learn-Web/blob/master/sabka-bazaar/screenprints/register-tablet.png")|


 

#### Stylesheet
SASS is used for styling the components/pages

#### Javascript
JS is used as programming language for Controller of different views/pages.
Webpack is used to bundle them.



## Data Server
We are using a mock server here [canned](https://www.npmjs.com/package/canned)
The server will be made up & Running at `http://localhost:5000` either running `npm run start-server` or `npm run dev`
The api endpoints are:



Data | Endpoint | 
--- | --- |
**Home Page  Banners** | GET http://localhost:5000/banners  |
 **Product Categories** | GET http://localhost:5000/categories |
 **Products** | GET http://localhost:5000/products |
 **Add Product To Cart** | POST http://localhost:5000/addToCart |
 
 ## References
 * [CSS Modal](https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_modal)
 * [Webpack Chunks](https://webpack.js.org/guides/code-splitting)
 * [Material Design Icons](https://material.io/tools/icons/?style=baseline)
 
