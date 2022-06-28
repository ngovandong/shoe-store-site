<template lang="">
  <div>
    <v-card style="padding: 20px">
      <v-card-title size="60">
        <v-icon style="margin: 10px" color="#7c92fe" size="50">mdi-cart</v-icon>
        Cart
      </v-card-title>
      <v-container>
        <v-list>
          <ProductCart v-for="(item, i) in items" :item="item" :key="i" />
        </v-list>
      </v-container>
      <v-card-text style="color: #16c0b0; font-size: 22px">{{
        "Total: " + getTotal() + "₫"
      }}</v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn @click="closeCart"> Close </v-btn>
        <v-btn color="primary" @click="orderhandle"> Order </v-btn>
      </v-card-actions>
    </v-card>
    <v-snackbar v-model="error">
      Out of stock
      <template v-slot:action="{ attrs }">
        <v-btn color="pink" text v-bind="attrs" @click="error = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
    <v-snackbar v-model="success">
      Orrder Success
      <template v-slot:action="{ attrs }">
        <v-btn color="pink" text v-bind="attrs" @click="success = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>
<script>
import { privateAxios } from "@/interceptors/axios";
import { mapGetters, mapActions } from "vuex";
import ProductCart from "./ProductCart.vue";

export default {
  props: ["closeCart"],
  components: { ProductCart },
  data: () => ({
    error: false,
    success: false,
  }),
  methods: {
    ...mapActions(["fetchCart"]),
    orderhandle() {
      privateAxios
        .post("sales/", {})
        .then(() => {
          this.fetchCart();
          this.success = true;
          setTimeout(this.closeCart, 2000);
        })
        .catch(() => {
          this.error = true;
        });
    },
  },
  computed: {
    ...mapGetters(["getTotal", "items"]),
  },
};
</script>
<style scoped>
.total {
}
</style>
