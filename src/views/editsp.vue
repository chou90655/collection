<template>
  <ll-dialog class="_showlg" ref="ll_dialog" @close="$emit('close', cf)">
    <div class="ctt">
      <h3>编辑分店</h3>
      <cube-scroll ref="scroll" class="list" :data="list" :options="{ scrollbar: true }">
        <ul :class="['item', _.d&&'odd']" v-for="(_,i) in list" :key="i">
          <li @click="list.splice(i,1)"><i class="cubeic-delete"></i></li>
          <li><input type="text" v-model="_.v" @change="hdcg('v',_)"></li>
        </ul>
        <cube-button class="add" @click="list.push({v:''})" inline primary outline>添加分店</cube-button>
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
import shops from '../data/shops'
export default {
  components: { LlDialog },
  methods: {
    hdcg(_) {
      console.log(_)
    },
    save(v) {
      this.cf = v
      if (v) localStorage.sp = JSON.stringify(this.list.map(_ => _.v).filter(_ => _))
      this.$refs.ll_dialog && this.$refs.ll_dialog.close()
    }
  },
  data() {
    return {
      list: (JSON.parse(localStorage.sp || null) || shops).map(v => ({ v })),
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
      width: 20%;
      input {
        width: calc(100% - 10px);
        line-height: 28px;
        text-align: center;
        border: 1px solid #ddd;
        border-radius: 2px;
        overflow: hidden;
      }
      &:nth-child(2) {
        font-size: 18px;
        width: 68%;
      }
    }
  }
  .add {
    height: 38px;
    width: 292px;
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
