import Vue from "vue";
import App from "./App.vue";
import VueColcade from "vue-colcade";

Vue.config.productionTip = false;

Vue.use(VueColcade);

new Vue({
  render: (h) => h(App)
}).$mount("#app");
