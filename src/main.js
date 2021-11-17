import cssVars from 'css-vars-ponyfill';

import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import router from './router';
import store from './store';

import '@/assets/styles/base.scss';


Vue.config.productionTip = false;

cssVars();

new Vue({
    router,
    store,
    vuetify,
    render: (h) => h(App),
}).$mount('#app');
