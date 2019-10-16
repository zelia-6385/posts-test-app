<template>
  <div class="d-flex flex-column">
    <app-header></app-header>

    <b-container>
      <div class="pr-main">
        <router-view />
      </div>
    </b-container>
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";

export default {
  components: {
    "app-header": TheHeader
  }
};
</script>

<style scoped>
.pr-main {
  margin-top: 75px;
  padding: 0;
}
</style>
