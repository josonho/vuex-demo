<template>
  <div class="top">
    <div class="row one-line">user name: {{ userName }}</div>
    <div class="row one-line">full name: {{ fullName }}</div>
    <div 
      class="row one-line"
      v-for="item in doneTodos" 
      :key="item.id"
    >
      done todo: {{ item.text }}
    </div>
    <div class="row one-line">doneTodosCount: {{ doneTodosCount }}</div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

export default {
  name: 'Top',
  data() {
    return {
      firstName: 'Ho',
    };
  },
  
  computed: {
    ...mapState({
      // 传字符串参数 'count' 等同于 `state => state.count`
      // userName: 'userName',
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
};
</script>