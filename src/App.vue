<template>
  <div id="app">
    <cube-scroll ref="scroll" :data="list" direction="horizontal" class="hwrap">
      <ul class="list"><li v-for="(_,i) in list" :key="i" :class="idx==i&&'act'" @click="idx=i">{{_.l}}</li></ul>
    </cube-scroll>
    <div class="com"><components :is='list[idx].c' /></div>
  </div>
</template>
<script>
const t = (v) => () => import('./components/' + v)
export default {
  data() {
    return {
      idx: 4,
      list: [{ l: '列表', c: t('list') }, { l: '滚动', c: t('scroll') }, { l: '滚动加载', c: t('pullscrl') },
        { l: 'node', c: t('node') }, { l: 'nodeS', c: t('nodeS') }]
    }
  }
}
</script>
<style lang="scss" scoped>
.list {
  height: 40px;
  li {
    padding: 0 8px;
    margin: 0 3px;
    line-height: 36px;
    &.act {
      color: #fcb620;
    }
  }
}
.hwrap {
  border-bottom: 1px solid #eee;
  font-size: 0;
  ::v-deep {
    .cube-scroll-content {
      display: inline-block
    }
  }
  .list {
    display: inline-flex;
    flex-wrap: nowrap;
    font-size: 14px;
  }
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 14px;
  color: #2c3e50;
}

</style>
