import { defineStore } from "pinia";
import axios from "axios";

export const productsStore = defineStore("products", {
  state: () => ({
    products: JSON.parse(localStorage.getItem("products")) || [],
    cart: JSON.parse(localStorage.getItem("carts")) || [],
    favorite: JSON.parse(localStorage.getItem("favorite")) || [],
  }),

  actions: {
    async fetchProducts() {
      const response = await axios.get("https://fakestoreapi.com/products");
      console.log(response.data);
      this.products = response.data || [];
      localStorage.setItem("products", JSON.stringify(response.data || []));
    },

    addProductToCart(product) {
      const index = this.cart.findIndex((el) => el.id === product.id);
      if (index === -1) {
        this.cart.push({ ...product, quantity: 1 });
      }
      localStorage.setItem("carts", JSON.stringify(this.cart));
    },
    removeProductToCart(product) {
      const index = this.cart.findIndex((el) => el.id === product.id);
      this.cart.splice(index, 1);
      localStorage.setItem("carts", JSON.stringify(this.cart));
    },
    addProductToFavorite(product) {
      const index = this.favorite.findIndex((el) => el.id === product.id);
      if (index !== -1) {
        this.favorite.splice(index, 1);
      } else {
        this.favorite.push(product);
      }
      localStorage.setItem("favorite", JSON.stringify(this.favorite));
    },
    changeQuantity(data) {
      this.cart.forEach((item) => {
        if (data.value === "++" && item.id === data.product.id) {
          item.quantity++;
        }
        if (data.value === "--" && item.id === data.product.id) {
          item.quantity--;
          if (item.quantity <= 0) {
            const index = this.cart.indexOf(item);
            this.cart.splice(index, 1);
          }
        }
      });
      localStorage.setItem("carts", JSON.stringify(this.cart));
    },
  },

  getters: {
    getProductById(id) {
      return this.products.find((product) => product.id === id);
    },

    getProducts() {
      return this.products;
    },
  },
});
