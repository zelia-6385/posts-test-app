<template>
  <div class="pr-header w-100">
    <b-navbar type="light" variant="warning">
      <b-navbar-brand href="/">
        <img src="../assets/favicon.png" />
        Vue test application
      </b-navbar-brand>

      <b-navbar-nav>
        <b-nav-item to="/">Home</b-nav-item>
        <b-nav-item to="/posts">Posts</b-nav-item>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<style scoped>
.pr-header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  padding: 0;
}
</style>
