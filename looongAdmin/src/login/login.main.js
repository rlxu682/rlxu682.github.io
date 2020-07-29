import Vue from 'vue';
import login from './login.vue';
import router from './login.router';
// import store from './store';
Vue.config.productionTip = false;
new Vue({  
    router,  
    render: h => h(login),
}).$mount('#login');