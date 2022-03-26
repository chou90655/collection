<template>
  <div :class="['icon '+item.icon]" :style="style" v-if="item.show" ref="item">
    <img :src="img" class="img" @click="$emit('click', item)" @touchstart="hdtc($event, 0)" @touchmove='hdtc($event, 1)' @touchend='hdtc($event, 2)'>
    <i class="clz" v-if="item.icon!='ball'" @click="$emit('close', item)"><img src="./img/clz.png"></i>
    <div class="time" v-if="item.icon=='rn'"><p>红包雨</p>{{'03:32:30'}}</div>
  </div>
</template>

<script>
// const getheight = key => parseInt(getComputedStyle(document.documentElement).getPropertyValue(`--${key}`), 10)
const getv = v => v / 375 * document.body.clientWidth
const left = document.body.clientWidth - getv(90)
export default {
  props: ['item', 'move', 'data'],
  methods: {
    hdtc({ targetTouches: list }, st) {
      if (!this.item.g) return
      if (list.length === 1 && !st) {
        this.$refs.item.classList.add('nan')
        this.starp = list[0]
        this.x = this.item.left
        this.y = this.item.top
      } else if (st === 1 && this.starp) {
        this.item.top = this.y + list[0].clientY - this.starp.clientY
        this.item.left = this.x + list[0].clientX - this.starp.clientX
        this.item.top = this.item.top < this.mintop ? this.mintop : this.item.top > this.maxtop ? this.maxtop : this.item.top
        this.item.left = this.item.left < -10 ? -10 : this.item.left > left ? left : this.item.left
      } else {
        this.starp = 0
        this.$refs.item.classList.remove('nan')
        this.item.l = this.item.left < left / 2
        this.item.left = this.item.left < left / 2 ? -10 : left
        this.$emit('mvend', this.item)
      }
    }
  },
  computed: {
    img() {
      return require('./img/' + this.item.icon + '.png')
    },
    style() {
      const { top, left, h } = this.item
      return { height: h + 'px', top: top + 'px', left: left + 'px' }
    }
  },
  created() {
    this.maxtop = this.item.maxtop - this.item.h
    this.mintop = this.item.mintop
  }
}
</script>
<style scoped lang="scss">
.icon {
  position: fixed;
  width: 90px;
  font-size: 0;
  text-align: center;
  padding-top: 18px;
  box-sizing: border-box;
  transition: all 0.3s ease-in-out;
  &.nan {
    transition: none;
    z-index: 1;
  }
  &.rn {
    .img {
      height: 48px;
    }
    .time {
      font-size: 10px;
      color: #D3C294;
      transform: scale(0.88);
      p {
        font-size: 10px;
      }
    }
  }
  &.ball {
    padding-top: 16px;
  }
  .img {
    height: 100%;
    pointer-events: auto;
  }
  .clz {
    pointer-events: auto;
    position: absolute;
    width: 22px;
    height: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    right: 1px;
    top: 0px;
    img {
      width: 16px;
      height: 16px;
    }
  }
}
p,i {
  margin: 0;
  padding: 0;
  font-style: normal;
}
</style>
