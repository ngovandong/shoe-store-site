<template lang="">
  <div>
    <ul>
      <span
        class="tabs"
        :class="{ activeTab: selectedTab === tab }"
        v-for="(tab, i) in tabs"
        @click="selectedTab = tab"
        :key="i"
        >{{ tab }}</span
      >
    </ul>
    <div class="tab-container">
      <div v-show="selectedTab === 'Reviews'">
        <p v-if="!comments.length">There are no reviews yet.</p>

        <v-list v-else dense>
          <v-list-item-group
            v-for="(comment, i) in comments"
            :key="i"
            color="primary"
          >
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-account</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="comment.name"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-star-half-full</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-rating
                  v-model="comment.star"
                  background-color="orange lighten-3"
                  color="orange"
                  size="20"
                ></v-rating>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-comment-account</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item v-text="comment.content"></v-list-item>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </div>

      <div v-show="selectedTab === 'Make a Review'">
        <ReviewForm :addReview="addReview"></ReviewForm>
      </div>
    </div>
  </div>
</template>
<script>
import ReviewForm from "./ReviewForm.vue";
import axios from "axios";
import { mapActions } from "vuex";
export default {
  components: { ReviewForm },
  props: ["comments", "shoeID"],
  data() {
    return {
      tabs: ["Reviews", "Make a Review"],
      selectedTab: "Reviews",
    };
  },
  methods: {
    ...mapActions(["fetchShoes"]),
    addReview(comment) {
      axios
        .post("comments/", { ...comment, shoe: this.shoeID })
        .then(() => this.fetchShoes())
        .catch((error) => console.log(error));
    },
  },
};
</script>
<style scoped>
.tabs {
  margin-left: 20px;
  cursor: pointer;
}

.activeTab {
  color: #16c0b0;
  text-decoration: underline;
}
.tab-container {
  margin: 1rem 3rem;
}
</style>
