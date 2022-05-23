import Vue from "vue";
import App from "./App.vue";
import "./index.css";
import VueTailwind from "vue-tailwind";
import VueTailwindComponent from "./VueTailwind";

Vue.config.productionTip = false;

Vue.use(VueTailwind, VueTailwindComponent);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
