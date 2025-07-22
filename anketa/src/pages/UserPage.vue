<template>
  <div class="user-page">
    <h1>User Page</h1>
    <p>This is the User page from Anketa remote</p>
    <router-link to="/client">Go to Client</router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'UserPage'
})
</script>