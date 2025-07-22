<template>
  <div class="anketa-app">
    <h1>Anketa Remote App</h1>
    <nav>
      <router-link to="/user">User</router-link> |
      <router-link to="/client">Client</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'AnketaApp'
})
</script>