import Vue from "vue";
import Router from "vue-router";

import { routerName } from "./router-names";

// Components
import TheHomeLink from "@/views/TheHome.vue";
import ThePostsList from "@/views/ThePostsList.vue";
import TheNotFound from "@/views/TheNotFound.vue";
import PostsListDetails from "@/views/ThePostDetails.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: routerName.home,
      component: TheHomeLink
    },
    {
      path: "/posts",
      name: routerName.posts,
      component: ThePostsList
    },
    {
      path: "/posts/:id",
      name: routerName.postDetails,
      component: PostsListDetails
    },
    {
      path: "*",
      component: TheNotFound
    }
  ]
});
