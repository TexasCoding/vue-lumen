<template>
  <div class="columns is-mobile">
    <div class="column is-half is-offset-one-quarter">
      <div class="card">
        <header class="card-header">
          <p class="card-header-title">
            <slot name="title">Card Title</slot>
          </p>
          <a class="card-header-icon">
            <span class="icon">
              <slot name="icon"><i class="fa fa-angle-down"></i></slot>
            </span>
          </a>
        </header>
        <div class="card-content">
          <div class="content">
            <slot>Default card content...</slot>
          </div>
        </div>
      </div>  
    </div>
  </div>
  
</template>

<script>
export default {
  name: 'AuthLayout',
};
</script>
