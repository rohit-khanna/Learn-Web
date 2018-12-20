# Sabka Bazar
---
## User Interface
The following sections define the User Interface
#### HTML
It contains the following pages:
- Home Page
- Products Listing Page (PLP)
- Mini Cart
- Login
- Register

#### Stylesheet
SASS is used for styling the components/pages
`npm run build-css` 
will build the SASS & transpiles it into 1 css file

#### Javascript
The JS files for UI are present under *UI/js* folder.
Webpack is used to bundle them.
`npm run build-js`


## Server
We are using a mock server here [canned](https://www.npmjs.com/package/canned)
##### Run Mock Server
`npm run start-server`
This will make the server up & Running at `http://localhost:5000`
The api endpoints are:



Data | Endpoint | 
--- | --- |
**Home Page  Banners** | GET http://localhost:5000/banners  |
 **Product Categories** | GET http://localhost:5000/categories |
 **Products** | GET http://localhost:5000/products |
 **Add Product To Cart** | POST http://localhost:5000/addToCart |
