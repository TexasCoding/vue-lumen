import './bootstrap';
import router from './routes';

import NavBar from './components/NavBar.vue';

// eslint-disable-next-line no-new
new Vue({ // eslint-disable-line no-undef
  el: '#app',
  router,
  components: { NavBar },
});
