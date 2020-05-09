import Vue from 'vue'
import Vuex from 'vuex'
import routes from './route'
import VueRouter from 'vue-router'
import movies from './store/modules/movies/index'
Vue.use(VueRouter)
Vue.use(Vuex)
const router = new VueRouter({
    routes,
    mode:'history'
})
const store = new Vuex.Store({
    modules:{
        movies
    }
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
    router,
    store
});