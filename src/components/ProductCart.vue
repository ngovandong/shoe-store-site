<template>
  <v-list-item>
    <v-list-item-avatar rounded="0" size="100">
      <v-img :src="item.shoe_image"></v-img>
    </v-list-item-avatar>

    <v-list-item-content>
      <v-list-item-title v-text="item.shoe_name"></v-list-item-title>

      <v-list-item-subtitle
        v-text="'size: ' + item.size"
      ></v-list-item-subtitle>
      <v-list-item-subtitle
        style="color: #fa5400"
        v-text="'price: ' + item.shoe_price + '₫'"
      ></v-list-item-subtitle>
      <div class="qty-input">
        <span>{{ "qty: " + item.qty }}</span>
        <v-btn class="mx-3" dark small color="primary" @click="sub">
          <v-icon dark> mdi-minus </v-icon>
        </v-btn>
        <v-btn class="mx-3" dark small color="primary" @click="add">
          <v-icon dark> mdi-plus </v-icon>
        </v-btn>
      </div>
    </v-list-item-content>

    <v-list-item-action>
      <v-btn @click="deleteFromCart" icon>
        <v-icon color="rgb(235, 52, 39)">mdi-delete</v-icon>
      </v-btn>
    </v-list-item-action>
    <v-snackbar v-model="error">
      Out of stock
      <template v-slot:action="{ attrs }">
        <v-btn color="pink" text v-bind="attrs" @click="error = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </v-list-item>
</template>
<script>
import { privateAxios } from "@/interceptors/axios";
import { mapActions } from "vuex";
export default {
  props: ["item"],
  data() {
    return {
      error: false,
    };
  },
  methods: {
    ...mapActions(["fetchCart"]),
    add() {
      this.changeQuantity({
        id: this.item.id,
        qty: this.item.qty + 1,
      });
    },
    sub() {
      if (this.item.qty > 1) {
        this.changeQuantity({
          id: this.item.id,
          qty: this.item.qty - 1,
        });
      }
    },
    changeQuantity(update) {
      privateAxios
        .patch(`cart_details/${this.item.id}/`, update)
        .then(() => {
          this.fetchCart();
        })
        .catch(() => {
          this.error = true;
          this.fetchCart();
        });
    },
    deleteFromCart() {
      privateAxios
        .delete(`cart_details/${this.item.id}/`)
        .then(() => {
          this.fetchCart();
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>
.qty-input {
  display: flex;
  align-items: center;
  height: 60px;
}
</style>
