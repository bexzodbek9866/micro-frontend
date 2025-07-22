<template>
  <div class="product-page">
    <h1>Product Page</h1>
    <p>This is the Product page from Delivery remote</p>
    <router-link to="/car">Go to Car</router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'ProductPage'
})
</script>