<template>
  <div>
    <el-button size="small" @click="onCount">add one</el-button>
    <el-button size="small" @click="mapMutation">mapMutation</el-button>
    <el-button size="small" @click="resetCount">reset count</el-button>
    <el-button size="small" @click="dispatch">dispatch</el-button>
    <el-button size="small" @click="mapDispatch">mapDispatch</el-button>
    <el-button size="small" @click="asyncDispatch">asyncDispatch</el-button>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import { mapActions } from 'vuex';
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
    
    ...mapActions({
      mapDispatch: 'increment'
    }),

    dispatch() {
      this.$store.dispatch('incrementSome', 5);
    },

    asyncDispatch() {
      this.$store.dispatch('asyncDispatch', 5);
    },
  },
};
</script>

<style lang="scss">
.el-button {
  margin-top: 3px;
  padding: 6px 8px;
  border-radius: 13px;

  & + .el-button {
    margin-left: 3px;
  }
}
</style>