import Vue from "vue";
import Vuex from "vuex";

import { JsonPlaceholder } from "../api/jsonplaceholder.js";

Vue.use(Vuex);

const jsonplaceholderAPI = new JsonPlaceholder();

export default new Vuex.Store({
  state: {
    post: {},
    posts: [],
    error: false,
    start: 0
  },

  mutations: {
    updatePosts(state, result) {
      state.posts = state.posts.concat(result);
    },

    updateStart(state) {
      state.start += 20;
    },

    removePostCard(state, index) {
      state.posts.splice(index, 1);
    }
  },

  actions: {
    postsGenerated({ commit, state }) {
      jsonplaceholderAPI
        .getPosts(state.start, state.limit)
        .then(resp => {
          const result = resp.data;
          commit("updatePosts", result);
        })
        .catch(() => {
          state.error = true;
        });
    },

    scrollGeneration({ commit, dispatch }) {
      let scrollTop = document.documentElement.scrollTop;
      let clientHeight = document.documentElement.clientHeight;
      let scrollHeight = document.documentElement.scrollHeight;

      if (scrollTop + clientHeight > scrollHeight - 1) {
        commit("updateStart");

        dispatch("postsGenerated");
      }
    },

    removeCard({ state }, id) {
      jsonplaceholderAPI.deletePost(id).catch(() => (state.error = true));
    },

    postGenerateById({ state }, id) {
      jsonplaceholderAPI
        .getPostById(id)
        .then(resp => (state.post = resp.data))
        .catch(() => (state.error = true));
    }
  },

  getters: {
    error(state) {
      return state.error;
    },

    posts(state) {
      return state.posts;
    },

    post(state) {
      return state.post;
    }
  }
});
