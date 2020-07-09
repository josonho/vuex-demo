<template>
  <div class="hello">
    <el-button class="mr-4" @click="onCount">add one</el-button>
    <el-button type="danger" @click="resetCount">reset count</el-button>
  </div>
</template>

<script>
import types from '../plugins/mutation-type'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods: {
    onCount() {
      this.$store.commit('increment');
      console.log(this.$store.state.count);
    },
    resetCount() {
      this.$store.commit(types.COUNT_RESET);
    },
  },
}
</script>
