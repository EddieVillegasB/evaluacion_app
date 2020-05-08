require('./bootstrap');
window.Vue = require('vue');
Vue.component('App', require('./components/App').default);
new Vue({
    el: '#app',
});
