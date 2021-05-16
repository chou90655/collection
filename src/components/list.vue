<template>
  <ul class="list">
    <li v-for="(_, i) in list" :key="i" :class="idx==i&&'act'" @click="idx=i">{{_}}2332232332</li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      list: 10,
      idx: 0
    }
  }
}
</script>
<style scoped lang="scss">
.list {
  padding: 0 10px;
  li {
    line-height: 36px;
    &.act {
      color: red;
    }
  }
}
</style>
