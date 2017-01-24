<template>
  <auth-layout>
    <span slot="title">Login</span>
    <span slot="icon"><i class="fa fa-sign-in"></i></span>
    <form>
      <label class="label">Email</label>
      <p class="control">
        <input type="email" class="input" placeholder="Enter email">
      </p>
      <label class="label">Password</label>
      <p class="control">
        <input class="input" type="password" placeholder="Enter password">
      </p>
      <p class="control is-group">
        <p class="control">
          <button class="button is-primary">Submit</button>
          <a class="button is-link" href="#">Cancel</a>
        </p>
      </p>
    </form>
  </auth-layout>
</template>

<script>
import AuthLayout from '../layouts/AuthLayout.vue';

export default {
  name: 'AuthLogin',
  components: { AuthLayout },
};
</script>
