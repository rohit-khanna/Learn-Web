/**
 * PURPOSE      :  This is the Shopping Cart Service.
 *
 * NOTES/COLOR SCHEME    :
 *
 * AUTHOR       :   Rohit Khanna
 *
 * LICENSE      :   PUBLIC
 *
 */
"use strict";

import FetchDAL from "./FetchDAL";
import DataService from "./DataService";

class ShoppingCartService {
  constructor() {
    this.dataService = new DataService(new FetchDAL());
    this.banners = [];
    this.categories = [];
    this.products = [];
  }

  loadMockDataAsync() {
    return Promise.all([
      this._fetchBanners(),
      this._fetchCategories(),
      this._fetchProducts()
    ]);
  }

  async _fetchBanners() {
    // this.banners = await this.dataService.fetchBannersAsync();
    this.banners = [
      {
        bannerImageUrl: "/images/offers/offer1.jpg",
        bannerImageAlt: "Independence Day Deal - 25% off on shampoo",
        isActive: true,
        order: 1,
        id: "5b6c38156cb7d770b7010ccc"
      },
      {
        bannerImageUrl: "/images/offers/offer2.jpg",
        bannerImageAlt: "Independence Day Deal - Rs120 off on surf",
        isActive: true,
        order: 14,
        id: "5b6c38336cb7d770b7010ccd"
      },
      {
        bannerImageUrl: "/images/offers/offer3.jpg",
        bannerImageAlt: "Independence Day Deal - Rs99 off on domex",
        isActive: true,
        order: 3,
        id: "5b6c38456cb7d770b7010cce"
      },
      {
        bannerImageUrl: "/images/offers/offer4.jpg",
        bannerImageAlt: "Independence Day Deal - Rs99 off on bodywash",
        isActive: true,
        order: 4,
        id: "5b6c38576cb7d770b7010ccf"
      },
      {
        bannerImageUrl: "/images/offers/offer5.jpg",
        bannerImageAlt: "Independence Day Deal - Rs70 off on tea",
        isActive: true,
        order: 5,
        id: "5b6c386b6cb7d770b7010cd0"
      }
    ];

    return Promise.resolve();
  }
  async _fetchCategories() {
    // this.categories = await this.dataService.fetchCategoriesAsync();
    this.categories = [
      {
        name: "Beverages",
        key: "beverages",
        description:
          "Our beverage department will ensure your fridge is always fully stocked. Shop for soda, juice, beer and more. ",
        enabled: true,
        order: 3,
        imageUrl: "/static/images/category/beverages.png",
        id: "5b675e5e5936635728f9fc30"
      },
      {
        name: "Bakery Cakes and Dairy",
        key: "bakery-cakes-dairy",
        description:
          "The best cupcakes, cookies, cakes, pies, cheesecakes, fresh bread, biscotti, muffins, bagels, fresh coffee, milk and more.",
        enabled: true,
        order: 2,
        imageUrl: "/static/images/category/bakery.png",
        id: "5b6899123d1a866534f516de"
      },
      {
        name: "Beauty and Hygiene",
        key: "beauty-hygiene",
        description:
          "Buy beauty and personal care products online in India at best prices.",
        enabled: true,
        order: 4,
        imageUrl: "/static/images/category/beauty.png",
        id: "5b68994e3d1a866534f516df"
      },
      {
        name: "Baby Care",
        key: "baby",
        description:
          "Shop online for Baby Products, Diapers, Skin Care Products,etc.",
        enabled: true,
        order: 5,
        imageUrl: "/static/images/category/baby.png",
        id: "5b6899683d1a866534f516e0"
      },
      {
        name: "Seafood",
        key: "seafood",
        description: "Great place to buy fresh seafood.",
        enabled: false,
        order: -1,
        id: "5b68997d3d1a866534f516e1"
      },
      {
        name: "Fruits & Vegetables",
        key: "fruit-and-veg",
        description: "A variety of fresh fruits and vegetables.",
        enabled: true,
        order: 1,
        imageUrl: "/static/images/category/fruits.png",
        id: "5b6899953d1a866534f516e2"
      }
    ];
    return Promise.resolve();
  }
  async _fetchProducts() {
    // this.products = await this.dataService.fetchProductsAsync();
    this.products = [
      {
        name: "Fresho Kiwi - Green, 3 pcs",
        imageURL: "/static/images/products/fruit-n-veg/kiwi-green.jpg",
        description:
          "Kiwis are oval shaped with a brownish outer skin. The flesh is bright green and juicy with tiny, edible black seeds.",
        price: 87,
        stock: 50,
        category: "5b6899953d1a866534f516e2",
        sku: "fnw-kiwi-3",
        id: "5b6c6a7f01a7c38429530883"
      },
      {
        name: "Apple - Washington, Regular, 4 pcs",
        imageURL: "/static/images/products/fruit-n-veg/apple.jpg",
        description:
          "The bright red coloured and heart shaped Washington apples are crunchy, juicy and slightly sweet. Washington Apples are a natural source of fibre and are fat free.",
        price: 187,
        stock: 50,
        category: "5b6899953d1a866534f516e2",
        sku: "fnw-apple-4",
        id: "5b6c6aeb01a7c38429530884"
      },
      {
        name: "Fresho Pomegrante Peeled, 500 gm ",
        imageURL: "/static/images/products/fruit-n-veg/pomegrante.jpg",
        description:
          "Pomegranate variety has a glossy, vibrant and soft ruby-red skin. The inside of the fruit is divided into compartments by thin white membranes.",
        price: 88,
        stock: 50,
        category: "5b6899953d1a866534f516e2",
        sku: "fnw-pomegranate-500",
        id: "5b6c6b7001a7c38429530885"
      },
      {
        name: "Capsicum - Green, 1 kg",
        imageURL: "/static/images/products/fruit-n-veg/capsicum-green.jpg",
        description:
          "Leaving a moderately pungent taste on the tongue, Green capsicums, also known as green peppers are bell shaped, medium-sized fruit pods.",
        price: 137,
        stock: 50,
        category: "5b6899953d1a866534f516e2",
        sku: "fnw-capsicum-1",
        id: "5b6c6bdc01a7c38429530886"
      },
      {
        name: "Tomato - Local, Organically Grown, 500 gm",
        imageURL: "/static/images/products/fruit-n-veg/capsicum-green.jpg",
        description:
          "Fresho brings to you an exquisite range of locally grown organic tomatoes, which are now available at bigbasket. These organic tomatoes are free from harmful pesticides and insecticides.",
        price: 12,
        stock: 50,
        category: "5b6899953d1a866534f516e2",
        sku: "fnw-tomatoes-500",
        id: "5b6c6c1801a7c38429530887"
      }
    ];
    return Promise.resolve();
  }
}

// module.exports = ShoppingCartService;
export default ShoppingCartService;
