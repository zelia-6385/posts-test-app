import Vue from "vue";
Vue.config.productionTip = false;

// Bootstrap
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BootstrapVue);

// App
import App from "./App.vue";
import router from "./router";
import store from "./store/store.js";

// Common styles
import "./style.css";

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
