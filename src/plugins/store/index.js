
import Vue from 'vue';
import Vuex from 'vuex';
import types from './mutation-type'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
    userName: 'Joson',
    todos: [
      {id: 2, text: 'learn vue', done: false},
      {id: 6, text: 'eat', done: true},
    ],
    str: '',
    num: '',
  },
  getters: {
    doneTodos: (state) => {
      return state.todos.filter(todo => todo.done);
    },
    doneTodosCount: (state, getters) => {
      return getters.doneTodos.length;
    },
  },
  mutations: {
    increment (state) {
      state.count++
    },
    incrementSome (state, n) {
      console.log(n);
      state.count += n;
    },
    [types.COUNT_RESET] (state) {
      state.count = 0;
    },
    mutationsObject (state, payload) {
      state.str = payload.str;
    },
  },
  actions: {
    increment ({ commit }) {
      commit('increment');
    },
    incrementSome ({ commit }, n) {
      commit('incrementSome', n);
    },
    asyncDispatch ({ commit }, n) {
      setTimeout(() => {
        commit('incrementSome', n);
      }, 3000);
    }
  },
})