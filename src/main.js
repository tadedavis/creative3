import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import mock from "./mock-data.js";

Vue.config.productionTip = false;

let data = {
  questions: mock,
  answers: [
    {
    id: 1,
    key: 1,
    string: "the answer is 4",
    author: "Tade Davis",
    date: "11/1/2021"
  },
  {
  id: 2,
  key: 2,
  string: "Paris",
  author: "Tade Davis",
  date: "11/1/2021"
},
]
}

new Vue({
  router,
  data,
  render: (h) => h(App),
}).$mount("#app");
