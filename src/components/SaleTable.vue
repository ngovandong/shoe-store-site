<template lang="">
  <div class="wrapper">
    <h3>Order #{{ sale.id }}</h3>
    <p>Date: {{ sale.date }}</p>
    <p>Total: {{ sale.total }}</p>
    <h4>Products</h4>
    <div class="table-container">
      <v-data-table :headers="headers" :items="sale.details"></v-data-table>
    </div>
  </div>
</template>
<script>
export default {
  props: ["sale"],
  data() {
    return {
      headers: [
        {
          text: "Product",
          align: "start",
          sortable: true,
          value: "name",
        },
        { text: "Size", value: "size" },
        { text: "Price", value: "price" },
        { text: "Quantity", value: "qty" },
        { text: "Total", value: "total" },
      ],
    };
  },
};
</script>
<style scoped>
.wraper {
  margin: 20px 0;
}
.table-container {
  margin: 20px 0;
}
</style>
