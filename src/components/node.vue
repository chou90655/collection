<template>
  <div class="list">
    <button @click="request">212121</button>
    <button @click="create('title')">create</button>
    <button @click="create()">create1</button>
    <ul>
      <li v-for="(_, i) in list" :key="i" :class="idx==i&&'act'">
        {{_.title}}<button @click="detail(_._id)">detail</button><button @click="del(_._id)">del</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { list, detail, create, del } from '../api/interface'
export default {
  data() {
    return {
      idx: 0,
      list: []
    }
  },
  methods: {
    request() {
      list().then(res => {
        this.list = res
      })
    },
    detail(id) {
      detail(id).then(res => {
        console.log(res)
      })
    },
    del(id) {
      del(id).then(res => {
        console.log(res)
        this.request()
      })
    },
    create(t) {
      const { length } = this.list
      const title = t ? (t + length) : undefined
      create({ title, content: 'ddsssdsddsdsds' + length }).then(res => {
        this.request()
      })
    }
  },
  created() {
    this.request()
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
