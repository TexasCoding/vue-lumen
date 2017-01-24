import VueRouter from 'vue-router';
import HomeView from './views/HomeView.vue';
import AuthLogin from './views/auth/Login.vue';
import AuthRegister from './views/auth/Register.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/login',
    name: 'login',
    component: AuthLogin,
  },
  {
    path: '/register',
    name: 'register',
    component: AuthRegister,
  },
];

export default new VueRouter({
  routes,
  linkActiveClass: 'is-active',
});
