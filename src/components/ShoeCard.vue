<template lang="">
  <v-col cols="12" sm="4" :class="isThird">
    <v-hover v-slot:default="{ hover }">
      <v-card height="300" align="center" @click="buy" flat outlined tile>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="black" small dark>{{ "15%" }}</v-btn>
        </v-card-actions>
        <v-img
          :src="shoe.thumnail ? shoe.thumnail : shoe.image"
          width="260"
          height="190"
          contain
        ></v-img>
        <v-card-text class="mt-n2">
          <strong :class="hover ? 'red--text' : 'black--text'">{{
            shoe.name
          }}</strong>
        </v-card-text>
        <v-card-text class="mt-n7">
          <strong>{{ shoe.price + "₫" }}</strong>
        </v-card-text>
        <v-expand-transition>
          <div
            v-if="hover"
            class="d-flex transition-fast-in-fast-out blue v-card--reveal display-3 white--text"
            style="height: 100%"
          >
            <v-btn rounded color="white">
              <v-icon color="black">mdi-eye</v-icon>
            </v-btn>
            <v-btn fab small color="white" class="ml-2">
              <v-icon color="black">mdi-heart-outline</v-icon>
            </v-btn>
          </div>
        </v-expand-transition>
      </v-card>
    </v-hover>
  </v-col>
</template>
<script>
export default {
  props: ["position", "shoe"],
  computed: {
    isThird() {
      return this.position % 3 == 0 ? "py-0 pl-0" : "pa-0";
    },
  },
  methods: {
    buy() {
      this.$router.push("/shoe/" + this.shoe.id);
    },
  },
};
</script>
<style lang=""></style>
