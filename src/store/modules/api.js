import axios from "axios";

function buildApiRouteQueryParams(params) {
  const apiroute = `https://the-trivia-api.com/api/questions?categories=${params.getQueryParams.categorie}&limit=10&difficulty=${params.getQueryParams.difficulty.toLowerCase()}`;
  return apiroute;
}

export default {
  namespaced: true,
  state: {
    queryParams: {},
    questions: []
  },
  getters: {
    getQueryParams(state) {
      return state.queryParams;
    },
    getQuestions(state) {
      return state.questions;
    }
  },
  mutations: {
    setQueryParams(state, payload) {
      state.queryParams = payload;
    },
    setQuestions(state, payload) {
      state.questions = payload;
    }
  },
  actions: {
    async getQuestions({ commit, getters }) {
      const route = buildApiRouteQueryParams(getters);
      try {
        let response = await axios.get(route);
        commit('setQuestions', response.data);
        return response.data;
      } catch (error) {
        return error;
      }
    }
  },
};
