import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import BootstrapVue from 'bootstrap-vue';
import Notifications from 'vue-notification';
import VueTheMask from 'vue-the-mask';
import Skeleton from 'vue-loading-skeleton';

Vue.use(BootstrapVue);
Vue.use(Notifications);
Vue.use(VueTheMask);
Vue.use(Skeleton);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
