<template>
  <div class="home">
    <h1>Shell Application</h1>
    <div class="buttons">
      <button @click="navigateToAbout">Go to About my page</button>
      <button @click="navigateToAnketa">Go to Anketa</button>
      <button @click="navigateToDelivery">Go to Delivery</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'HomeView',
  setup() {
    const router = useRouter()

    const navigateToAbout = () => {
      router.push('/about')
    }
    const navigateToAnketa = () => {
      router.push('/anketa')
    }

    const navigateToDelivery = () => {
      router.push('/delivery')
    }

    return {
      navigateToAnketa,
      navigateToDelivery,
      navigateToAbout
    }
  }
})
</script>

<style scoped>
.buttons {
  margin-top: 20px;
  display: flex;
  gap: 10px;
}

button {
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
}
</style>