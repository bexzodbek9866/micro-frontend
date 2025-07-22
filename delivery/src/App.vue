<template>
  <div class="delivery-app">
    <h1>Delivery Remote App</h1>
    <nav>
      <router-link to="/product">Product</router-link> |
      <router-link to="/car">Car</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'DeliveryApp'
})
</script>