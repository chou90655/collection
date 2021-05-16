<template>
  <div class="list">
    <cube-scroll ref="scrl" :data="list" class="list" @pulling-down="onPullingDown" @pulling-up="onPullingUp" :options="options">
      <ul><li v-for="(_, i) in list" :key="i">{{_.l}}</li></ul>
    </cube-scroll>
  </div>
</template>
<script>
const fetch = (params, rlt) => new Promise((resolve, reject) => setTimeout(() => resolve(rlt), 2000))
const items = Array(10).fill(1).map((_, i) => ({ l: i }))
export default {
  data() {
    return {
      list: [...items].reverse(),
      options: {
        pullDownRefresh: { threshold: 60, stop: 40, stopTime: 400, txt: '刷新成功！' },
        pullUpLoad: { threshold: 0, stop: 40, txt: { more: '拉取数据成功！', noMore: '已无更多数据！' } }
      },
      loading: 0,
      pn: 1,
      ps: 10
    }
  },
  methods: {
    getData(i) {
      if (this.loading) return
      this.loading = 1
      fetch({ pageSzie: this.ps, pageNum: this.pn }, items).then(res => {
        if (i === 1) this.list = []
        if (res.length) this.list.push(...res)
        else this.$refs.scrl.forceUpdate()
      }).finally(() => (this.loading = 0))
    },
    onPullingDown() {
      this.pn = 1
      this.getData(1)
    },
    onPullingUp() {
      this.pn++
      this.getData()
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
