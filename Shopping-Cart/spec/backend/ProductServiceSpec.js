/**
 * PURPOSE      :  This is the test suite for Product Service
 *
 * AUTHOR       :   Rohit Khanna
 *
 * LICENSE      :   PUBLIC
 *
 */

import FetchDAL from "../../src/backend/services/FetchDAL";
import Product from "../../src/backend/model/Product";
import ProductService from "../../src/backend/services/ProductService";
const _ID = 1021;
describe("Product-Service", function() {
  let productService;
  var originalTimeout;

  beforeEach(function() {
    originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
  });

  afterEach(function() {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
  });

  describe("When Product Service is Initialzed with Fetch DAL", function() {
    productService = new ProductService(
      new FetchDAL("http://localhost:3000/products")
    );

    it("should create a new Product in DB", async function() {
      //Arrange
      let product = new Product(
        "NewProduct_Cr",
        ["red", "green", "BLUE"],
        ["M", "s", "l"],
        "Style#443",
        979.9,
        _ID
      );

      //Act
      let result = await productService.saveProductAsync(product);

      //Assert
      expect(result.id).toBe(_ID);
    });

    it("should  Find All Products", async function() {
      //Arrange

      //Act
      let result = await productService.findAllProductsAsync();

      //Assert
      expect(result.length).toBeGreaterThanOrEqual(0);
    });

    it("should Find Product with ID:_ID", async function() {
      //Arrange

      //Act
      let result = await productService.findProductAsync(_ID);

      //Assert
      expect(result.id).toBe(_ID);
    });

    it("should Update Product with ID:_ID", async function() {
      //Arrange
      let product = await productService.findProductAsync(_ID);
      product.description = "I am Modified";

      //Act
      let resultUpdated = await productService.updateProductAsync(product);

      //Assert
      expect(resultUpdated.description).toBe("I am Modified");
    });

    it("should Delete Product with ID:_ID", async function() {
      //Arrange

      //Act
      let resultUpdated = await productService.deleteProductAsync(_ID);

      //Assert
      expect(resultUpdated.id).toBe(undefined);
    });
  });

  describe("When Product Service is Initialzed with Fetch DAL and Throws Error", function() {
    productService = new ProductService(
      new FetchDAL("http://localhost:3000/products")
    );

    it("should throw Error if trying to create product with same ID", async function() {
      //arrange
      let product = new Product(
        "NEW",
        ["BLUE"],
        ["M"],
        "Style#DUPLI",
        979.9,
        999
      );
      await productService.saveProductAsync(product);

      product.description = "DUPLICATED";
      //act
      //assert
      productService
        .saveProductAsync(product)
        .then()
        .catch(err => {
          expect(err.message).toBe(
            "saveProductAsync():ServiceAPI Call failed. Status Code:500  Internal Server Error"
          );
        });
    });

    afterEach(async function(){
      await productService.deleteProductAsync(999);
    });
  }); // end describe
});
