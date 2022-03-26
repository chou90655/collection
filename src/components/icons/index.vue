<template>
  <ul class="icons">
    <item v-for="(_, i) in items" :key="i" :item='_' @close='close' @click="hdclick(_)" @mvend='mvend' />
  </ul>
</template>

<script>
import item from './item.vue'
const getheight = key => parseInt(getComputedStyle(document.documentElement).getPropertyValue(`--${key}`), 10)
const getv = v => v / 375 * document.body.clientWidth
const Top = getv(260) + getheight('sat')
const height = document.body.clientHeight - getheight('sat') - getheight('sab') - getv(50)
const maxtop = document.body.clientHeight - getv(50) - getheight('sab')
const mintop = getv(44) + getheight('sat')
const left = document.body.clientWidth - getv(90)
export default {
  components: { item },
  data() {
    return {
      items: [{ icon: 'dld', h: getv(85) }, { icon: 'rn', h: getv(88) }, { icon: 'bp', h: getv(74), g: 1 },
        { icon: 'ball', h: getv(60), g: 1 }, { icon: 'frd', h: getv(80) }]
    }
  },
  created() {
    let top = this.items.reduce((a, c) => a + c.h, 0)
    top = top > height - getv(260) ? height - top : Top
    this.top = top
    this.items = this.items.map((_, i) => {
      if (i) top += this.items[i - 1].h
      return { ..._, top, show: 1, in: 1, left, maxtop, mintop }
    })
    this.citems = JSON.parse(JSON.stringify(this.items))
  },
  methods: {
    hdclick(e) {
      console.log(e)
    },
    mvend(item) {
      let arr = this.items.filter(_ => _.icon !== item.icon && !!_.l === item.l && _.show).sort((a, b) => a.top - b.top)
      let rslt = ''
      let data = ''
      arr = [...arr, 1].forEach((_, i) => {
        const it = [i ? arr[i - 1].top + arr[i - 1].h : mintop, (_ === 1 ? maxtop : _.top) - item.h]
        if (it[0] > it[1]) return ''
        else if (item.top <= it[0]) data = [it[0], it[0] - item.top]
        else if (item.top >= it[1]) data = [it[1], item.top - it[1]]
        else if (item.top > it[0] && item.top < it[1]) data = [item.top, 0]
        rslt = rslt ? rslt[1] < data[1] ? rslt : data : data
      })
      item.top = rslt[0]
      this.close(item, 1)
    },
    close(item, tr) {
      if (!tr) item.show = 0
      const it = this.citems.find(_ => _.icon === item.icon)
      if (it.l) return
      if (it.top < this.top || (it.top === item.top && item.show)) return
      const items = [...this.items.filter(_ => !_.l && _.show)].sort((a, b) => a.top - b.top)
      items.forEach((_, i) => {
        if (_.top > it.top) {
          _.top -= it.h
          if (i && _.top < items[i - 1].top + items[i - 1].h) _.top = items[i - 1].top + items[i - 1].h
        }
      })
      this.citems = JSON.parse(JSON.stringify(this.items))
    }
  }
}
</script>
<style scoped lang="scss">
.icons {
  pointer-events: none;
}
</style>
