<template>
  <div class="home a">
    <h1 class="b">This is an home page</h1>
  </div>
</template>
<script lang="ts" setup>
import {getAllApi} from "@/api/index"
getAllApi("/",{})
</script>
<style scoped lang="scss">
.a{
  .b{
    background: red;
  }
}
</style>
