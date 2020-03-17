import Vue from "vue";
import "./plugins/vuetify";

import App from "./App.vue";
import router from "./router";
import store from "./store";
import i18n from "./i18n";

// Axios
// -----------------------------------------
import axios from "axios";
Object.defineProperty(Vue.prototype, "axios", {
  value: axios
});

// VueLodash
// -----------------------------------------
import _ from "lodash";
Object.defineProperty(Vue.prototype, "$_", {
  value: _
});

Vue.config.productionTip = false;

// Axios
// -----------------------------------------
new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount("#app");
