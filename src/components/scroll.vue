<template>
  <cube-scroll ref="scroll" :data="list">
  <ul class="list">
    <li v-for="(_,i) in list" :key="i">{{_}}343434343443</li>
  </ul>
</cube-scroll>
</template>

<script>
export default {
  data() {
    return {
      list: Array(30).fill(1).map((_, i) => i)
    }
  }
}
</script>
<style scoped lang="scss">
.cube-scroll-wrapper {
  height: 500px;
}
.list li {
  line-height: 40px;
  text-align: center;
}
</style>
