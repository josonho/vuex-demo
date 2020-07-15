<template>
  <div class="msg">
    <div class="row">count: {{ count }}</div>
    <div class="row">{{str || 'please input string'}}</div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Msg',
  computed: {
    ...mapState({
      count: (state) => state.count,
      num: (state) => state.num,
      str: (state) => state.str,
    }),
  },
};
</script>