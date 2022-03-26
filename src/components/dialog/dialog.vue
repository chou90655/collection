<template>
  <div class="_dialog" ref="_dialog">
    <transition name="fade" appear>
      <div class="_mask" v-if="show" @click="close"></div>
    </transition>
    <transition name="scale" appear>
      <div class="_container" v-if="show">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>
<script>
// 如果想在关闭dialog组件时启用动画效果 需要手动调用该组件的 close 方法
export default {
  data() {
    return { show: 1 }
  },
  mounted() {
    document.body.appendChild(this.$el)
  },
  methods: {
    close() {
      this.show = 0
      setTimeout(() => this.$emit('close'), 350)
    }
  },
  beforeDestroy() {
    this.$refs._dialog && this.$refs._dialog.remove()
  }
}
</script>
<style lang="stylus" scoped>
._dialog{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  ._container{
    position: relative;
  }
  ._mask{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color rgba(0,0,0,0.5)
  }
}
.fade-enter-active, .fade-leave-active{
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to{
  opacity: 0;
}
.scale-enter-active{
  animation: scale .25s ease-out;
}
.scale-leave-active{
  animation: scale .35s reverse;
}
@keyframes scale {
  0%{
    transform: scale(0);
  }
  100%{
    transform: scale(1);
  }
}
</style>
