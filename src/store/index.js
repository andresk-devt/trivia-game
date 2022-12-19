import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    categories: [],
  },
  getters: {
    getCategories(state) {
      return state.categories;
    },
  },
  mutations: {
    setCategories(state, payload) {
      state.categories = payload;
    },
  },
  actions: {
    async getCategoriesOptions({ getters, commit }) {
      try {
        let response = getters.getCategories;
        if (response.length === 0) {
          let response = await axios.get(
            "https://the-trivia-api.com/api/categories"
          );
          commit("setCategories", response.data);
        }
        return response.data;
      } catch (error) {
        return error;
      }
    },
  },
  modules: {},
});
