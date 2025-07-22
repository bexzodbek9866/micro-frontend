<template>
  <div class="client-page">
    <h1>Client Page</h1>
    <p>This is the Client page from Anketa remote</p>
    <router-link to="/user">Go to User</router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'ClientPage'
})
</script>