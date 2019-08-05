/**
 * PURPOSE      :  This is the TEST Suite for FetchDAL
 *
 * AUTHOR       :   Rohit Khanna
 *
 * LICENSE      :   PUBLIC
 */
import FetchDAL from "../../src/backend/services/FetchDAL";
import Product from "../../src/backend/model/Product";

describe("FetchDAL", function() {
  let fetchDAL;
  const _ID = 1000;
  var originalTimeout;

  beforeEach(function() {
    originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
  });

  afterEach(function() {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
  });

  describe("When FetchDAL is used for PRODUCT entity", function() {
    fetchDAL = new FetchDAL("http://localhost:3000/products");

    it("should create a new Product Entity", async function() {
      //Arrange
      let product = new Product(
        "NewProduct_Cr",
        ["red", "green"],
        ["M", "s", "l"],
        "Style#123",
        99.9,
        _ID
      );

      //Act
      let result = await fetchDAL.save(product);
      let data = await result.json();

      //Assert
      expect(data.description).toBe(product.description);
    });

    it("should  Find All Products", async function() {
      //Arrange

      //Act
      let result = await fetchDAL.findAll();
      let data = await result.json();

      //Assert
      expect(data.length).toBeGreaterThan(0);
    });

    it("should Find Product with ID:_ID", async function() {
      //Arrange

      //Act
      let result = await fetchDAL.findById(_ID);
      let data = await result.json();

      //Assert
      expect(data.id).toBe(_ID);
    });

    it("should Update the product with ID:_ID", async function() {
      //Arrange

      //Act
      let result = await fetchDAL.findById(_ID);
      let data = await result.json(); // found that product
      data.description = "Modified-YES";
      let updatedResult = await fetchDAL.update(data);
      let updatedData = await updatedResult.json();

      //Assert
      expect(updatedData.description).toBe("Modified-YES");
    });

    it("should Delete the product with ID:_ID", async function() {
      //Arrange
      //Act
      let result = await fetchDAL.removeById(_ID);
      let data = await result.json(); // found that product
      let updatedResult = await fetchDAL.findById(_ID);
      let updatedData = await updatedResult.json();
      //Assert
      expect(updatedData.id).toBe(undefined);
    });
  });
});
