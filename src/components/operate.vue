<template>
  <div class="operate">
    <div class="row more-line">
      <el-input 
        placeholder="输入你要增加的值" 
        @input="incrementSome"
        v-model="num"
        size="small"
      />
      <btns />
    </div>
    <div class="row">
      <el-input 
        placeholder="输入字符串" 
        @input="mutationsObject"
        v-model="str"
        size="small"
        class="mt-1"
      />
      <el-input 
        placeholder="输入字符串新" 
        @input="mutationsObjectType"
        v-model="str"
        size="small"
        class="mt-1"
      />
    </div>
  </div>
</template>

<script>
import Btns from '../components/btns';

export default {
  name: 'Operate',
  data() {
    return {
      num: '',
      str: '',
    };
  },
  components: {
    Btns,
  },
  methods: {
    incrementSome(e) {
      this.$store.commit('incrementSome', Number(e));
    },
    mutationsObject(e) {
      console.log(e);
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
};
</script>
