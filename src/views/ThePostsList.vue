<template>
  <div class="pr-serve">
    <h1 v-if="error">Server error</h1>

    <b-row v-else>
      <b-col v-for="(post, index) in posts" :key="post.id" cols="4">
        <div class="card mb-4">
          <div class="card-body">
            <p class="card-text">Id: {{ post.id }}</p>
            <p class="card-text user-email">Title: {{ post.title }}</p>
            <p class="card-text">Body: {{ post.body }}</p>

            <b-button @click="removePostCard(index)" variant="success">Delete</b-button>

            <b-button
              :to="{name: route.postDetails, params: {id: post.id}}"
              variant="primary"
              class="ml-2"
            >More</b-button>
          </div>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";

import { routerName } from "@/router/router-names";

export default {
  data() {
    return {
      route: routerName
    };
  },

  computed: mapGetters(["error", "posts"]),

  mounted() {
    if (!this.posts.length) {
      this.postsGenerated();
    }

    window.addEventListener("scroll", this.scrollGeneration);
  },

  destroyed() {
    window.removeEventListener("scroll", this.scrollGeneration);
  },

  methods: {
    ...mapActions(["postsGenerated", "scrollGeneration"]),

    ...mapMutations(["removePostCard"])
  }
};
</script>

<style scoped>
.user-email {
  color: gray;
}
</style>
