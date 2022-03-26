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
import ids from '../data/ids4'
import { testd1 } from '../api/interface'
export default {
  data() {
    return {
      idx: 0,
      data: [],
      list: []
    }
  },
  methods: {
    testd1(id) {
      testd1(id).then(res => {
        const item = res.data.list
        const data = { url: item.url, name: item.name }
        console.log(data)
        this.data.push(data)
        localStorage._data1 = JSON.stringify(this.data)
      })
    }
  },
  created() {
    console.log(ids);
    (async () => {
      for (let index = 0; index < ids.length; index++) {
        try {
          const item = await testd1(ids[index])
          if (item && item.data && item.data.list) {
            const data = { url: item.data.list.url, name: item.data.list.name }
            console.log(data)
            this.data.push(data)
            localStorage._data3 = JSON.stringify(this.data)
          } else console.log(item)
        } catch (error) {
        }
      }
    })()
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
