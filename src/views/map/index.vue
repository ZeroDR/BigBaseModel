<script lang="ts" setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

</script>

<template>
  <div class="content-map">123</div>
</template>

<style scoped>
  .content-map{
    position:relative;
    width:100vw;
    height: calc(100vh - 57px);
    margin-top:57px;
  }
</style>
