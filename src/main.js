import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import FullPageLayout from "./Pages/Layouts/FullPageLayout.vue";
import Products from "./components/Products.vue";
import Input from "./components/Input.vue";
import Cart from "./components/Cart.vue";
import App from "./App.vue";
import router from "./router";

import { formatCurrency } from "@/Service/FormatCurrency";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.component("FullPageLayout", FullPageLayout);
app.component("Products", Products);
app.component("Cart", Cart);
app.component("Input", Input);
app.mixin({
  methods: {
    formatCurrency,
  },
});

app.mount("#app");
