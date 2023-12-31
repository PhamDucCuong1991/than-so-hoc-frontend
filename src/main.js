import Vue from 'vue';
import App from './App.vue';
import router from "@/router";
import './assets/css_than_so_hoc/css.css';
import './assets/css_than_so_hoc/css1.css';
import './assets/css_than_so_hoc/css2.css';
import './assets/css_than_so_hoc/css3.css';
import './assets/css_than_so_hoc/css4.css';
import './assets/css_than_so_hoc/css5.css';
import './assets/css_than_so_hoc/css6.css';
import './assets/css_than_so_hoc/css7.css';
import './assets/css_than_so_hoc/css8.css';
import './assets/css/bootstrap.min.css';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router,
  scrollBehavior() {
    return {x: 0, y: 0}
  }
}).$mount('#app')
