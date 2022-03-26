<template>
  <div class="container">
    <div class="wrap" ref="warp">
      <ul :class="['list', style.transform?'':'animat']" :style="style" ref="list" @animationstart='animationend(1)' @animationiteration='animationend()'>
        <li v-for="(_, i) in list" :key="i" @click="idx=i">{{_.label}}aaaaa</li>
      </ul>
    </div>
    <p class="btn" @click="lottery">抽奖</p>
    <p class="btn" @click="style={}">重置</p>
  </div>
</template>

<script>
const list = Array(10).fill(1).map((_, i) => ({ id: i, label: i }))
export default {
  data() {
    return {
      list: [],
      style: {}
    }
  },
  created() {
    this.getdata()
  },
  methods: {
    lottery() {
      const idx = Math.floor(Math.random() * list.length)
      console.log(idx)
      this.getresult(idx)
    },
    getresult(index) {
      const warpHeight = this.$refs.warp.offsetHeight
      const itemHeight = this.$refs.list.querySelector('li').offsetHeight
      const moveHeight = itemHeight * list.length * (new Date().getTime() - this.time) / 5000
      this.style = { transform: `translateY(-${moveHeight}px)` }
      setTimeout(() => {
        window.requestAnimationFrame(() => {
          this.style = { transform: `translateY(-${(index + list.length * 3 + 0.5) * itemHeight - warpHeight / 2}px)` }
        })
      })
    },
    animationend(i) {
      this.time = new Date().getTime() - (i ? 100 : 0)
    },
    getdata() {
      setTimeout(() => {
        this.list = [...list, ...list, ...list, ...list, ...list]
      }, 500)
    }
  }
}
</script>
<style scoped lang="scss">
.btn {
  text-align: center;
  line-height: 50px;
}
.wrap {
  margin-top: 10px;
  height: 252px;
  overflow: hidden;
  border: 1px solid #000;
}
.list {
  &.animat {
    animation: 5s linear infinite running move;
  }
  transform: translateY(0px);
  transition: transform 6s ease-out; //cubic-bezier(0.1, 0.7, 1.0, 0.1)
  padding: 0 10px;
  li {
    line-height: 36px;
    text-align: center;
    // &.act {
    //   color: red;
    // }
  }
}
@keyframes move {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-20%);
  }
}
</style>
