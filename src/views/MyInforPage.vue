<template lang="">
  <div class="wrapper">
    <div class="infor">
      <h1>My account</h1>
      <v-form class="form-info" v-if="user">
        <v-container>
          <v-row>
            <v-col cols="12" sm="3">
              <span class="label">Name:</span>
            </v-col>
            <v-col cols="12" sm="9">
              <v-text-field :value="user.name" solo readonly></v-text-field>
            </v-col>

            <v-col cols="12" sm="3">
              <span class="label">Email:</span>
            </v-col>
            <v-col cols="12" sm="9">
              <v-text-field :value="user.email" solo readonly></v-text-field>
            </v-col>

            <v-col cols="12" sm="3">
              <span class="label">Phone:</span>
            </v-col>
            <v-col cols="12" sm="9">
              <v-text-field :value="user.phone" solo readonly></v-text-field>
            </v-col>

            <v-col cols="12" sm="3">
              <span class="label">Address:</span>
            </v-col>
            <v-col cols="12" sm="9">
              <v-text-field :value="user.address" solo readonly></v-text-field>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
      <div class="btn-container">
        <v-btn color="error" @click="handleLogout">Logout</v-btn>
      </div>
    </div>
    <div class="order-container">
      <h2>My orders</h2>
      <br />
      <div>
        <sale-table
          v-for="sale in sales"
          :sale="sale"
          :key="sale.id"
        ></sale-table>
      </div>
    </div>
  </div>
</template>
<script>
import { mapMutations } from "vuex";
import SaleTable from "@/components/SaleTable.vue";
import axios from "axios";
export default {
  components: { SaleTable },
  data() {
    return {
      user: null,
      sales: [],
    };
  },
  methods: {
    ...mapMutations(["logout"]),
    handleLogout() {
      this.logout();
      this.$router.push("/");
    },
    setSales(responseData) {
      this.sales = responseData.map((data) => ({
        id: data.id,
        total: data.total,
        date: data.date.slice(0, 10),
        details: data.details.map((detail) => ({
          qty: detail.qty,
          name: detail.stock.shoe.name,
          price: detail.stock.shoe.price,
          size: detail.stock.size,
          total: detail.stock.shoe.price * detail.qty,
        })),
      }));
    },
    fetchInfor() {
      axios
        .get("customers/get_own_data/")
        .then((res) => (this.user = res.data))
        .catch((error) => console.log(error));
    },
    fetchSales() {
      axios
        .get("sales/")
        .then((res) => this.setSales(res.data))
        .catch((error) => console.log(error));
    },
  },
  mounted() {
    this.fetchInfor();
    this.fetchSales();
  },
};
</script>
<style scoped>
.wrapper {
  width: 100%;
  padding: 2rem;
}

.infor {
  margin: 0 auto;
  width: 800px;
}

h1 {
  text-align: center;
  margin: 20px 0;
}

h2 {
  text-align: center;
}

span.label {
  font-size: 1.4rem;
  padding-left: 1rem;
}
.btn-container {
  width: 800px;
  display: flex;
  justify-content: center;
  margin: 4rem auto;
}
.form-info {
  margin: 2rem 0;
}

.order-container {
  margin: 0 auto;
  width: 800px;
}
</style>
