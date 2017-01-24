<template>
  <nav class="nav has-shadow">
    <div class="container">
      <div class="nav-left">
        <router-link :to="{ name: 'home' }" class="nav-item" exact>
          <img src="http://bulma.io/images/bulma-logo.png" alt="Bulma logo">
        </router-link>
        <router-link :to="{ name: 'home' }" class="nav-item is-tab" exact>Home</router-link>
      </div>
      <span class="nav-toggle">
        <span></span>
        <span></span>
        <span></span>
      </span>
      <div class="nav-right nav-menu">
        <router-link :to="{ name: 'home' }" class="nav-item is-tab is-hidden-tablet">Home</router-link>
        <router-link :to="{ name: 'login' }" class="nav-item is-tab">Login</router-link>
        <router-link :to="{ name: 'register' }" class="nav-item is-tab">Register</router-link>
        <a class="nav-item is-tab">Log out</a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
};
</script>
