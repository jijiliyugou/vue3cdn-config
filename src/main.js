import Vue from "vue";
import App from "./App.vue";
// 引入el-tree-grid
import ElTreeGrid from "element-tree-grid";
Vue.component(ElTreeGrid.name, ElTreeGrid);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
