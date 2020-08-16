import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


import Vuex from 'vuex'
Vue.use(Vuex)
import('bootstrap')
import('bootstrap/dist/css/bootstrap.min.css')
//import jquery from 'jquery'
window.$ = window.jQuery  = require('jquery')
import proper from 'popper.js'
import('bootstrap/dist/js/bootstrap.min.js')
/*Axios*/
import axios from 'axios';
window.axios = axios;
window.token = localStorage.getItem('access_token');
axios.defaults.baseURL = ' http://localhost/laravel-vue/api-ecommerce/public/api/';
axios.defaults.headers.common['Authorization'] = 'Bearer '+token;
axios.defaults.headers.post['Content-Type'] = 'application/json';
/*iziToast*/
import iziTostCss from '../node_modules/izitoast/dist/css/iziToast.min.css'
import iziTostJs from '../node_modules/izitoast/dist/js/iziToast'
window.iziToast = iziTostJs;
/*vform*/
import { Form, HasError, AlertError } from 'vform'
window.Form = Form,
Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)
/*pagination*/
Vue.component('pagination', require('laravel-vue-pagination'));

Vue.config.productionTip = false

new Vue({
	router,
    store,
    render: h => h(App),
}).$mount('#app')
