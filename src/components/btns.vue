<template>
  <div>
    <el-button size="small" @click="onCount">add one</el-button>
    <el-button size="small" @click="mapMutation">mapMutation</el-button>
    <el-button size="small" type="danger" @click="resetCount">reset count</el-button>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import types from '../plugins/store/mutation-type';

export default {
  name: 'Btns',
  methods: {
    ...mapMutations({
      mapMutation: 'increment',
    }),

    onCount() {
      this.$store.commit('increment');
    },

    resetCount() {
      this.$store.commit(types.COUNT_RESET);
    },
  },
};
</script>