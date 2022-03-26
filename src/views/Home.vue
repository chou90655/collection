<template>
<div class="home">
  <div class="btn">
    <cube-button inline primary @click="seditsp=1">分店 <i class="cubeic-edit"></i></cube-button>
    <cube-button inline primary @click="seditkd=1">类型 <i class="cubeic-edit"></i></cube-button>
    <cube-button inline @click="expt">导出</cube-button>
    <cube-button inline primary outline>总计: {{total.toFixed(2)}}元</cube-button>
  </div>
  <ul class="thd"><li v-for="(_, i) in thead" :key="i" v-html="_"></li></ul>
  <cube-scroll ref="scroll" class="ctt" :data="list" :options="{ scrollbar: true }">
    <ul :class="['list', _.d&&'odd']" v-for="(_,i) in list" :key="i">
      <li @click="hdclc(_)">{{_.sp}}</li>
      <li>{{_.l}}</li>
      <li><input type="number" v-model="_.v" @change="hdcg('v',_)"></li>
      <li><input type="number" v-model="_.n" @change="hdcg('n',_)"></li>
      <li @click="hdclc(_,1)">{{((_.v||0)*(_.n||0)).toFixed(2)}}</li>
    </ul>
  </cube-scroll>
  <editsp v-if="seditsp" @close='close'/>
  <editkd v-if="seditkd" @close='close'/>
</div>
</template>

<script>
import shops from '../data/shops'
import json2csv from 'json2csv'
import kinds from '../data/kinds'
import { toast, format } from '../utils/tools'
const gd = (key, value) => JSON.parse(localStorage[key] || null) || value
const kind = gd('kd', kinds)
export default {
  data() {
    window.__this = this
    return {
      data: gd('sp', shops).map((_, i) => kind.map((__, _i) => ({ ...__, sp: _, n: '0', d: i % 2, o: _i, s: !_i }))),
      seditsp: 0,
      seditkd: 0,
      total: 0,
      thead: ['分店', '类型', '价格<i>(元/斤)</i>', '重量<i>(斤)</i>', '合计<i>(元)</i>']
    }
  },
  computed: {
    list() {
      return this.data.flat().filter(_ => _.s)
    }
  },
  watch: {
    list() {
      this.gettotal()
    }
  },
  methods: {
    hdcg(key, _) {
      _[key] = (+_[key]).toFixed(2) || '0.00'
      this.gettotal()
    },
    expt() {
      try {
        const rows = this.list.map(_ => ({ 分店: _.sp, 类型: _.l, '价格(元/斤)': _.v, '重量(斤)': _.n, '合计(元)': ((_.v || 0) * (_.n || 0)).toFixed(2) }))
        const result = json2csv.parse(rows, { fields: ['分店', '类型', '价格(元/斤)', '重量(斤)', '合计(元)'], excelStrings: true })
        const csvContent = 'data:text/csv;charset=utf-8,\uFEFF' + result
        this.createDownLoadClick(csvContent, `${'猪肉 ' + format(new Date(), 0, '.')}.csv`)
      } catch (err) {
        toast('导出失败，请重试')
      }
    },
    createDownLoadClick(content, fileName) {
      const link = document.createElement('a')
      link.href = encodeURI(content)
      link.download = fileName
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    },
    gettotal() {
      this.total = this.list.reduce((a, c) => c.n * c.v + a, 0)
    },
    hdclc(_, type) {
      const index = this.data.findIndex(i => i[0].sp === _.sp)
      const item = this.data[index]
      if (type) {
        if (item.filter(_ => _.s).length === 1) return toast('分店至少保留一条', false)
        _.s = false
        this.$set(this.data, index, [...item.filter(_ => _.s), ...item.filter(_ => !_.s)])
      } else {
        const show = item.find(_ => !_.s)
        if (show) {
          show.s = true
          this.$set(this.data, index, [...item])
        }
      }
    },
    close(v) {
      this.seditsp = 0
      this.seditkd = 0
      if (v) {
        const kind = gd('kd', kinds)
        this.data = gd('sp', shops).map((_, i) => kind.map((__, _i) => ({ ...__, sp: _, n: '0.00', d: i % 2, o: _i, s: !_i })))
      }
    }
  },
  components: { editsp: () => import('./editsp'), editkd: () => import('./editkd') }
}
</script>
<style scoped lang="scss">
ul {
  height: 36px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #f5f5f5;
  li {
    width: 18%;
    flex-grow: 1;
    input {
      width: calc(100% - 10px);
      line-height: 28px;
      text-align: center;
      border: 1px solid #ddd;
      border-radius: 2px;
      overflow: hidden;
    }
    &:nth-child(4) {
      width: 15.2%;
    }
    &:nth-child(3) {
      width: 17%;
    }
    &:nth-child(2) {
      width: 13.8%;
    }
    &::v-deep {
      i {
        color: #fc9153;
        font-size: 12px;
      }
    }
  }
  &.odd {
    background-color: #eee;
  }
}
.thd {
  color: #666;
  font-size: 19px;
  border-top: 1px solid #f5f5f5;
  border-bottom: none;
  background-color: #ddd;
}
.btn {
  display: flex;
  justify-content: space-around;
  height: 36px;
  padding: 5px 0;
  button {
    font-size: 16px;
    width: 62px;
    padding: 9px 5px;
    &:last-child {
      width: 138px;
    }
    &::v-deep {
      i {
        font-size: 12px;
      }
    }
  }
}
.ctt {
  height: calc(100% - 82px);
}
.home {
  text-align: center;
  height: 100%;
  width: 100%;
  position: relative;
  overflow: hidden;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 17px;
  color: #333;
}
</style>
