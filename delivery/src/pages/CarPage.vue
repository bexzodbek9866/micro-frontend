<template>
  <div class="car-page">
    <h1>Car Page</h1>
    <p>This is the Car page from Delivery remote</p>
    <router-link to="/product">Go to Product</router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'CarPage'
})
</script>