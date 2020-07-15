<template>
  <div class="home">
    <top />
    <div class="main">
      <msg class="col" />
      <operate class="col" /> 
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import Top from '../components/top';
import Msg from '../components/msg';
import Operate from '../components/operate';

export default {
  name: 'App',
  data() {
    return {
      firstName: 'Ho',
      num: '',
      str: '',
    }
  },
  components: {
    Top,
    Msg,
    Operate
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
.home {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow: hidden;
  margin: 60px auto 0;
  max-width: 600px;

  & .main {
    display: flex;
  }
}
</style>
