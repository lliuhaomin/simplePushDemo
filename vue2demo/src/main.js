// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";

Vue.config.productionTip = false;

/* eslint-disable no-new */
// new Vue({
//   el: "#app",
//   router,
//   components: { App },
//   template: "<App/>"
// });
document.addEventListener(
  "deviceready",
  function() {
    window.Vue = new Vue({
      el: "#app",
      router,
      components: { App },
      template: "<App/>"
    });
  },
  false
);
