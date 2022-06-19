<template>
  <v-container fluid>
    <router-view></router-view>
    <v-card
      color="#EFF0F2"
      height="250px"
      tile
      flat
      dark
      class="d-flex align-center justify-center mt-n10 card2"
    >
      <v-row>
        <v-col cols="12" sm="12">
          <h4 class="text-center black--text mt-10">
            SUBSCRIBE TO OUR NEWSLETTER
          </h4>
        </v-col>
        <v-col cols="12" sm="12">
          <h6 class="text-center grey--text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            dolorem dignissimos <br />
            Eos eligendi cupiditate cumque nemo sapiente quae omnis doloribus
            ducimus.
          </h6>
        </v-col>
        <v-col cols="12" sm="12">
          <v-card flat color="transparent" class="d-flex justify-center">
            <v-text-field
              placeholder="Enter Your Email"
              rounded
              class="shrink"
              background-color="grey"
              filled
              append-icon="mdi-email-outline"
              dense
            ></v-text-field>
          </v-card>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
export default {};
</script>

<style>
.container {
  padding: 0px !important;
}
.v-btn.withoutupercase {
  text-decoration: none;
}
.v-chip.v-size--default {
  border-radius: 50px !important;
  font-size: 14px !important;
  height: 40px !important;
  width: 40px !important;
}
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.5;
  position: absolute;
  width: 100%;
}
.card1 {
  z-index: 10;
}
.card2 {
  z-index: 1;
}
</style>
