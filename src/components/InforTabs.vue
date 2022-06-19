<template lang="">
  <div>
    <div>
      <span
        class="tabs"
        :class="{ activeTab: selectedTab === tab }"
        v-for="(tab, i) in tabs"
        @click="selectedTab = tab"
        :key="i"
        >{{ tab }}</span
      >
      <div style="margin: 20px auto">
        <div v-show="selectedTab === 'Shipping'">
          <p style="color: green">Free</p>
        </div>

        <div v-show="selectedTab === 'Details'">
          <p>{{ details }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    details: {
      required: true,
    },
  },
  data() {
    return {
      tabs: ["Shipping", "Details"],
      selectedTab: "Shipping",
    };
  },
};
</script>
<style scoped>
.tabs {
  margin-right: 20px;
  cursor: pointer;
}

.activeTab {
  color: #16c0b0;
  text-decoration: none;
}
</style>
