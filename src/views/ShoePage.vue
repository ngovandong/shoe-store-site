<template lang="">
  <div class="product">
    <div class="product-image">
      <img :src="shoe.image" />
    </div>

    <div class="product-info">
      <h1>{{ shoe.name }}</h1>
      <span class="status" v-if="true">In Stock</span>
      <span class="status" v-else>Out of Stock</span>
      <p class="price">{{ shoe.price + "₫" }}</p>
      <InforTabs :details="shoe.desc"></InforTabs>

      <v-chip-group column>
        <v-chip filter outlined color="black" text-color="black"></v-chip>
        <v-chip filter color="#E6E6E6" text-color="black"></v-chip>
        <v-chip filter color="#FFB500" text-color="white"></v-chip>
        <v-chip filter color="#F27229" text-color="white"> </v-chip>
        <v-chip filter color="#EB3427" text-color="white"> </v-chip>
        <v-chip filter color="#923FA3" text-color="white"> </v-chip>
        <v-chip filter color="#3A51DF" text-color="white"></v-chip>
        <v-chip filter color="#23A7F5" text-color="white"> </v-chip>
        <v-chip filter color="#5EB524" text-color="white"> </v-chip>
        <v-chip filter color="#7C5F4D" text-color="white"> </v-chip>
        <v-chip filter color="black" text-color="white"> </v-chip>
        <v-chip filter color="lime" text-color="white"> </v-chip>
      </v-chip-group>
      <v-chip-group @change="check = $event" active-class="blue white--text">
        <v-chip
          v-for="stock in shoe.stocks"
          :key="stock.id"
          :disabled="stock.qty <= 0"
          class="size"
        >
          {{ stock.size }}
        </v-chip>
      </v-chip-group>

      <v-btn
        :style="{ 'margin-top': '40px' }"
        @click="add"
        :disabled="check === undefined"
        depressed
        color="primary"
      >
        Add to cart
      </v-btn>
    </div>

    <ProductTabs :comments="shoe.comments" :shoeID="shoe.id"></ProductTabs>
    <v-snackbar v-model="success" :timeout="2000">
      Added to cart

      <template v-slot:action="{ attrs }">
        <v-btn color="blue" text v-bind="attrs" @click="success = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
    <v-snackbar v-model="error" :timeout="2000">
      Shoe is already in your cart!

      <template v-slot:action="{ attrs }">
        <v-btn color="red" text v-bind="attrs" @click="error = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>
<script>
import { privateAxios } from "@/interceptors/axios";
import { mapGetters, mapActions, mapState } from "vuex";
import InforTabs from "../components/InforTabs.vue";
import ProductTabs from "../components/ProductTabs.vue";
export default {
  props: ["id"],
  components: { InforTabs, ProductTabs },
  data() {
    return {
      currentStock: null,
      check: undefined,
      success: false,
      error: false,
    };
  },
  methods: {
    ...mapActions(["fetchCart"]),
    add() {
      if (this.isAuthenticated) {
        const stock = this.shoe.stocks[this.check];
        privateAxios
          .post("cart_details/", { stock: stock.id, qty: 1 })
          .then(() => {
            this.fetchCart();
            this.success = true;
          })
          .catch(() => (this.error = true));
      } else {
        this.$router.push("/login");
      }
    },
  },
  computed: {
    ...mapState(["isAuthenticated"]),
    ...mapGetters(["getShoeById"]),
    shoe() {
      return this.getShoeById(this.id);
    },
  },
};
</script>
<style scoped>
.product {
  display: flex;
  flex-flow: wrap;
  padding: 1rem;
  margin: 5rem 2rem;
}

img {
  border: 1px solid #d8d8d8;
  width: 70%;
  margin: 40px;
  box-shadow: 0px 0.5px 1px #d8d8d8;
}

.product-image {
  width: 80%;
}

.product-image,
.product-info {
  margin-top: 10px;
  width: 50%;
}

.color-box {
  width: 40px;
  height: 40px;
  margin-top: 5px;
}

.status {
  font-size: 0.85rem;
  color: #333;
}
.price {
  color: #fa5400;
  margin: 10px 0;
}
</style>
