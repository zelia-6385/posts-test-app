<template>
  <div class="pr-details">
    <div class="card mb-4">
      <div class="card-body">
        <div v-if="!error">
          <p class="card-text">Id: {{ post.id }}</p>
          <p class="card-text user-email">Title: {{ post.title }}</p>
          <p class="card-text">Body: {{ post.body }}</p>
        </div>

        <div v-else>
          <p class="card-text">Статья с id={{ id }} не найдена</p>
        </div>

        <b-button :to="{name: route.posts}" variant="warning" class="mt-2">Back</b-button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import { routerName } from "@/router/router-names.js";

export default {
  data() {
    return {
      route: routerName,
      id: this.$route.params.id
    };
  },

  created() {
    this.postGenerateById(this.id);
  },

  computed: mapGetters(["error", "post"]),

  methods: {
    ...mapActions(["removeCard", "postGenerateById"])
  }
};
</script>
