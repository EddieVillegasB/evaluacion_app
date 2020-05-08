import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './route'
Vue.use(VueRouter)
const router = new VueRouter({
    routes,
    mode:'history'
})
Vue.mixin({
    filters:{
        isActive(value){
            return value ? 'Activo' : 'Inactivo'
        }
    }
})
require('./bootstrap');
window.Vue = require('vue');
Vue.component('App', require('./components/App').default);
new Vue({
    el: '#app',
    router
});