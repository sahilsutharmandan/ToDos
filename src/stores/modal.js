import { defineStore } from "pinia";

export const modalsStore = defineStore("modals", {
  state: () => ({
    isCartOpen: false,
  }),

  actions: {
    openCart() {
      this.isCartOpen = true;
    },
    closeCart() {
      this.isCartOpen = false;
    },
  },

  getters: {},
});
