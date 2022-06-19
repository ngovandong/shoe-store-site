<template>
  <v-app>
    <NavBar class="index" />
    <RouterContainer />
    <FooterBar />
  </v-app>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import RouterContainer from "@/components/RouterContainer.vue";
import FooterBar from "@/components/FooterBar.vue";
export default {
  name: "HomeView",
  data() {
    return {};
  },
  methods: {},
  components: { NavBar, RouterContainer, FooterBar },
};
</script>

<style scoped>
.index {
  z-index: 1000;
}
</style>
