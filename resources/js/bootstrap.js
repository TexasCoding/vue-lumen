import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import axios from 'axios';

window.Vue = Vue;
Vue.use(VueRouter, Vuex);

window.axios = axios;
window.axios.defaults.headers.common = {
  'X-Requested-With': 'XMLHttpRequest',
};
