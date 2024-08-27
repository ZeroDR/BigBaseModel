<script lang="ts" setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

</script>

<template>
  <div class="content-data">56</div>
</template>

<style scoped>
  .content-data{
    position:relative;
    width:100vw;
    height: calc(100vh - 57px);
    margin-top:57px;
  }
</style>
