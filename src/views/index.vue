<script lang="ts" setup>
import { ref } from 'vue'
import Header from '../components/layout/Header.vue'

defineProps({
  msg: String,
})

</script>

<template>
  <div class="container">
    <Header></Header>
    <router-view/>
  </div>
</template>

<style scoped>
  .container{
    height: 100vh;
  }
</style>
