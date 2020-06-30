<template>
  <div id="app">
    <div>user name: {{ userName }}</div>
    <div>full name: {{ fullName }}</div>
    <div 
      v-for="item in doneTodos" 
      :key="item.id"
    >
      done todo: {{ item.text }}
    </div>
    <div>doneTodosCount: {{ doneTodosCount }}</div>
    <div>count: {{ count }}</div>
    <home />
  </div>
</template>

<script>
import home from './components/home.vue'
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'App',
  components: {
    home,
  },
  data() {
    return {
      firstName: 'Ho',
    }
  },
  computed: {
    ...mapState({
      count: (state) => state.count,
      // 传字符串参数 'count' 等同于 `state => state.count`
      userName: 'userName',
      fullName() {
        return `${this.userName} ${this.firstName}`;
      },
    }),

    // 当映射的计算属性的名称与 state 的子节点名称相同时，我们也可以给 mapState 传一个字符串数组
    ...mapGetters([
      'doneTodos',
      'doneTodosCount'
    ])
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  line-height: 30px;
}
</style>
