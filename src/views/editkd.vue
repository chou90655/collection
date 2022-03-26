<template>
  <ll-dialog class="_showlg" ref="ll_dialog" @close="$emit('close', cf)">
    <div class="ctt">
      <h3>编辑类型</h3>
      <cube-scroll ref="scroll" class="list" :data="list" :options="{ scrollbar: true }">
        <ul :class="['item', _.d&&'odd']" v-for="(_,i) in list" :key="i">
          <li @click="list.splice(i,1)"><i class="cubeic-delete"></i></li>
          <li><input type="text" v-model="_.l" @change="hdcg('l',_)"></li>
          <li><input type="number" v-model="_.v" @change="hdcg('v',_)"></li>
        </ul>
        <cube-button class="add" @click="list.push({v:''})" inline primary outline>添加类型</cube-button>
      </cube-scroll>
      <div class="btn">
        <cube-button inline outline @click="save(!1)" >取消</cube-button>
        <cube-button inline primary @click="save(!0)">保存</cube-button>
      </div>
    </div>
  </ll-dialog>
</template>

<script>
import LlDialog from '../components/dialog/dialog.vue'
import kinds from '../data/kinds'
export default {
  components: { LlDialog },
  methods: {
    hdcg(key, _) {
      if (key === 'v') _[key] = (+_[key]).toFixed(2)
    },
    save(v) {
      this.cf = v
      if (v) localStorage.kd = JSON.stringify(this.list.filter(_ => _.l && _.v))
      this.$refs.ll_dialog && this.$refs.ll_dialog.close()
    }
  },
  data() {
    return {
      list: JSON.parse(localStorage.kd || null) || kinds,
      cf: false
    }
  }
}
</script>
<style lang="scss" scoped>
.list {
  height: 352px;
  border-top: 1px solid #e7e7e7;
  ul {
    height: 38px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #e7e7e7;
    justify-content: center;
    color: #333;
    text-align: center;
    li {
      width: 38%;
      input {
        width: calc(100% - 10px);
        line-height: 28px;
        text-align: center;
        border: 1px solid #ddd;
        border-radius: 2px;
        overflow: hidden;
        font-size: 18px;
      }
      &:nth-child(1) {
        width: 18%;
      }
    }
  }
  .add {
    height: 38px;
    width: 312px;
    font-size: 18px;
    margin: 5px auto;
    display: block;
  }
}
.btn {
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 60px;
  padding: 0 8px;
  button {
    width: 43%;
    height: 36px;
    font-size: 16px;
  }
}
h3 {
  font-size: 18px;
  height: 38px;
  line-height: 38px;
  font-weight: bold;
  text-align: center;
  color: #ee9660;
}
.ctt {
  width: 340px;
  height: 450px;
  background-color: #fff;
  border-radius: 6px;
  overflow: hidden;
}
</style>
