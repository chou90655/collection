<template>
  <div class="list">
    <button @click="testd1">212121</button>
    <button @click="testd1('title')">create</button>
    <button @click="testd1()">create1</button>
    <ul>
      <li v-for="(_, i) in list" :key="i" :class="idx==i&&'act'">
        {{_.title}}<button @click="detail(_._id)">detail</button><button @click="del(_._id)">del</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { testd1 } from '../api/interface'
export default {
  data() {
    return {
      idx: 0,
      list: []
    }
  },
  methods: {
    testd1() {
      testd1().then(res => {
        console.log(res)
      })
    }
  },
  created() {
    this.testd1()
  }
}
</script>
<style scoped lang="scss">
.list {
  padding-top: 10px;
  text-align: center;
  line-height: 20px;
  button {
    margin-top: 10px;
    padding: 2px 10px;
    margin: 2px;
    cursor: pointer;
  }
  ul {
    margin-top: 10px;
    button {
      margin-left: 20px;
    }
  }
}
</style>
