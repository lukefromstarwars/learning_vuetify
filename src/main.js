import Vue from "vue";
import "./plugins/vuetify";

import App from "./App.vue";
import router from "./router";
import store from "./store";
import i18n from "./i18n";

//  Vuetify
// -----------------------------------------
// import Vuetify from "vuetify";
// import fr from "vuetify/es5/locale/fr";
// import nl from "vuetify/es5/locale/nl";

// Vue.use(Vuetify, {
//   // lang: {
//   //   locales: {
//   //     fr,
//   //     nl
//   //   },
//   //   current: "fr"
//   // }
// });

// Axios
// -----------------------------------------
import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(VueAxios, axios);
Vue.config.productionTip = false;

// Axios
// -----------------------------------------
new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount("#app");
