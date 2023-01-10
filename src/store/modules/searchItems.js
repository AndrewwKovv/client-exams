export default {
  state: {
    searchValue: '',
  },
  getters: {
    SEARCH_VALUE(state) {
      return state.searchValue;
    },
  },
  actions: {
    GET_SEARCH_VALUE_TO_VUEX({ commit }, value) {
      commit('SET_SEARCH_VALUE_TO_VUEX', value);
    },
  },
  mutations: {
    SET_SEARCH_VALUE_TO_VUEX(state, value) {
      state.searchValue = value;
    },
  },
};
