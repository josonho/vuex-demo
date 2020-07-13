<template>
  <div id="app">
    <div class="row">user name: {{ userName }}</div>
    <div class="row">full name: {{ fullName }}</div>
    <div 
      class="row"
      v-for="item in doneTodos" 
      :key="item.id"
    >
      done todo: {{ item.text }}
    </div>
    <el-input 
      placeholder="输入你要增加的值" 
      @input="incrementSome"
      v-model="num"
      size="small"
    />  
    <div class="row">doneTodosCount: {{ doneTodosCount }}</div>
    <div class="row">count: {{ count }}</div>
    <el-input 
      placeholder="输入字符串，失去焦点后更新" 
      @change="mutationsObject"
      v-model="str"
      size="small"
    />
    <el-input 
      placeholder="输入字符串，失去焦点后更新" 
      @change="mutationsObjectType"
      v-model="str"
      size="small"
    />
    <div class="row">{{str || 'please input string'}}</div>
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
      num: '',
      str: '',
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
  methods: {
    incrementSome(e) {
      this.$store.commit('incrementSome', Number(e));
    },
    mutationsObject(e) {
      this.$store.commit('mutationsObject', {
        str: `incrementObject:${e}`
      });
    },
    mutationsObjectType(e) {
      this.$store.commit({
        type: 'mutationsObject',
        str: `mutationsObjectType:${e}`
      })
    },
  },
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 60px auto 0;
  line-height: 30px;
  max-width: 300px;

  & * {
    margin-bottom: 20px;
    text-align: center;
  }
}


</style>
