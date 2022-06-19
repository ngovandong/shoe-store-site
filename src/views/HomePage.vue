<template>
  <div>
    <v-card
      color="#3853D8"
      height="150px"
      tile
      flat
      class="d-flex align-center justify-center"
      dark
    >
      <v-row>
        <v-col cols="12" sm="12">
          <h4 class="text-center">MEN'S LIFESTYLE SHOES</h4>
        </v-col>
        <v-col cols="12" sm="12">
          <!-- <v-breadcrumbs :items="items" class="justify-center mt-n7" dark>
            <template v-slot:divider>
              <v-icon color="#7C92FE">mdi-chevron-right</v-icon>
            </template>
          </v-breadcrumbs> -->
        </v-col>
      </v-row>
    </v-card>
    <v-card tile class="mx-16 mt-n10 card1" color="white">
      <v-row>
        <v-col cols="12" sm="3" class="mt-n6 pr-0">
          <v-toolbar flat outlined>
            <v-toolbar-title><strong>Filter</strong></v-toolbar-title>
            <v-spacer></v-spacer>
            <v-divider vertical></v-divider>
            <v-btn icon class="ml-1" @click="reset">
              <v-icon color="#3853D8"> mdi-sync </v-icon>
            </v-btn>
          </v-toolbar>
        </v-col>
        <v-col cols="12" sm="3" class="mt-n6 px-0">
          <v-toolbar flat outlined>
            <v-toolbar-title>
              SPORT BY: <span>Price $-$$</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon class="mr-4">
              <v-icon color="black">mdi-menu-down</v-icon>
            </v-btn>
          </v-toolbar>
        </v-col>
        <v-col cols="12" sm="3" class="mt-n6 px-0">
          <v-toolbar flat outlined class="">
            <v-toolbar-title>SHOW: <span>12</span></v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon class="mr-4">
              <v-icon color="black">mdi-menu-down</v-icon>
            </v-btn>
          </v-toolbar>
        </v-col>
        <v-col cols="12" sm="3" class="mt-n6 pl-0">
          <v-toolbar flat outlined>
            <v-btn icon class="mr-1">
              <v-icon color="#3853D8">mdi-apps</v-icon>
            </v-btn>
            <v-divider vertical></v-divider>
            <v-btn icon class="mx-1">
              <v-icon color="grey">mdi-format-list-bulleted</v-icon>
            </v-btn>
            <v-divider vertical></v-divider>
            <v-toolbar-title class="ml-2">
              <strong>COMPARE :</strong>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-badge color="#3853D8" content="3" class="mr-2"></v-badge>
          </v-toolbar>
        </v-col>
        <v-col cols="3" class="py-0 pr-0 mt-n3">
          <v-card flat outlined tile>
            <v-toolbar flat>
              <v-icon color="black" class="mr-2">mdi-chevron-down</v-icon>
              <strong>CATEGORIES</strong>
              <v-spacer></v-spacer>
              <v-icon color="grey" small>mdi-close</v-icon>
            </v-toolbar>
            <v-list dense class="mt-n5">
              <v-list-item @click.prevent="currentCategory = 0">
                <v-list-item-content>
                  <v-list-item-title class="ml-8">All</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item
                v-for="category in categories"
                :key="category.id"
                @click.prevent="currentCategory = category.id"
              >
                <v-list-item-content>
                  <v-list-item-title
                    v-text="category.name"
                    class="ml-8"
                  ></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card>
          <v-card flat outlined tile>
            <v-toolbar flat>
              <v-icon color="black" class="mr-2">msi-chevron-down</v-icon>
              <strong>PRICE (m₫)</strong>
              <v-spacer></v-spacer>
              <v-icon color="grey" small>mdi-close</v-icon>
            </v-toolbar>
            <v-toolbar flat>
              <v-text-field
                placeholder="0"
                filled
                rounded
                dense
                class="mx-2"
                v-model="rangePrice[0]"
              ></v-text-field>
              <v-text-field
                placeholder="10"
                filled
                rounded
                dense
                class="mx-2"
                v-model="rangePrice[1]"
              ></v-text-field>
            </v-toolbar>
            <v-range-slider
              color="blue"
              v-model="rangePrice"
              max="10"
              min="0"
              step="0.2"
            ></v-range-slider>
          </v-card>
          <v-card flat outlined tile>
            <v-toolbar flat>
              <v-icon color="black" class="mr-2">mdi-chevron-down</v-icon>
              <strong>BRAND</strong>
              <v-spacer></v-spacer>
              <v-icon color="grey" small>mdi-close</v-icon>
            </v-toolbar>
            <v-list dense class="mt-n5">
              <v-list-item v-for="brand in brands" :key="brand.title">
                <v-list-item-content>
                  <v-list-item-title
                    v-text="brand.title"
                    class="ml-6"
                  ></v-list-item-title>
                </v-list-item-content>
                <v-list-item-action>
                  <v-checkbox
                    color="primary"
                    v-model="brand.state"
                  ></v-checkbox>
                </v-list-item-action>
              </v-list-item>
            </v-list>
          </v-card>
          <v-card flat outlined tile>
            <v-toolbar flat>
              <v-icon color="black" class="mr-2">mdi-chevron-down</v-icon>
              <strong>COLOR</strong>
              <v-spacer></v-spacer>
              <v-icon color="grey" small>mdi-close</v-icon>
            </v-toolbar>
            <v-chip-group class="ml-2" column multiple>
              <v-chip filter outlined color="black" text-color="black"></v-chip>
              <v-chip filter color="#E6E6E6" text-color="black"></v-chip>
              <v-chip filter color="#FFB500" text-color="white"></v-chip>
              <v-chip filter color="#F27229" text-color="white"> </v-chip>
              <v-chip filter color="#EB3427" text-color="white"> </v-chip>
              <v-chip filter color="#923FA3" text-color="white"> </v-chip>

              <v-chip filter color="#3A51DF" text-color="white" class="ml-2">
              </v-chip>
              <v-chip filter color="#23A7F5" text-color="white"> </v-chip>
              <v-chip filter color="#5EB524" text-color="white"> </v-chip>
              <v-chip filter color="#7C5F4D" text-color="white"> </v-chip>
              <v-chip filter color="black" text-color="white"> </v-chip>
              <v-chip filter color="lime" text-color="white"> </v-chip>
            </v-chip-group>
          </v-card>
          <v-card flat outlined>
            <v-toolbar flat>
              <v-icon color="black" class="mr-2">mdi-chevron-down</v-icon>
              <strong>SIZE</strong>
              <v-spacer></v-spacer>
              <v-icon color="grey" small>mdi-close</v-icon>
            </v-toolbar>
            <v-chip-group
              column
              multiple
              active-class="blue white--text"
              class="ml-2"
            >
              <v-chip
                v-for="size in sizes"
                :key="size"
                :value="size"
                class="size"
              >
                {{ size }}
              </v-chip>
            </v-chip-group>
          </v-card>
        </v-col>
        <v-col cols="9" class="mt-n3">
          <v-row>
            <ShoeCard
              v-for="(shoe, i) in shoesOfPage()"
              :key="i"
              :position="i + 1"
              :shoe="shoe"
            />
          </v-row>
        </v-col>
        <v-col cols="12" sm="3" class="mt-n3 pr-0 pb-0">
          <v-toolbar flat outlined> </v-toolbar>
        </v-col>
        <v-col cols="12" sm="3" class="mt-n3 px-0 pb-0">
          <v-toolbar flat outlined>
            <v-btn icon class="mr-1">
              <v-icon color="grey">mdi-chevron-up</v-icon>
            </v-btn>
            <v-divider vertical></v-divider>
          </v-toolbar>
        </v-col>
        <v-col cols="12" sm="3" class="mt-n3 px-0 pb-0">
          <v-toolbar flat outlined class="text-center">
            <v-pagination v-model="page" :length="pages()"></v-pagination>
          </v-toolbar>
        </v-col>
        <v-col cols="12" sm="3" class="mt-n3 pl-0 pb-0">
          <v-toolbar flat outlined>
            <v-btn icon class="mr-1">
              <v-icon color="grey">mdi-chevron-down</v-icon>
            </v-btn>
            <v-divider vertical></v-divider>
          </v-toolbar>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>
<script>
import ShoeCard from "@/components/ShoeCard.vue";
import { mapGetters, mapState } from "vuex";

const initialState = () => ({
  page: 1,
  currentCategory: 0,
  rangePrice: [0, 10],
  rangeChange: 1,
  brands: [
    { title: "Adidas", state: true },
    { title: "Nike", state: false },
    { title: "Converse", state: true },
    { title: "Puma", state: false },
  ],
  sizes: [
    "35",
    "36",
    "37",
    "38",
    "39",
    "40",
    "41",
    "42",
    "43",
    "44",
    "45",
    "46",
  ],
});

export default {
  data() {
    return initialState();
  },
  methods: {
    reset() {
      Object.assign(this.$data, initialState());
    },
  },
  components: { ShoeCard },
  computed: {
    ...mapGetters(["allShoes", "categories"]),
    ...mapState(["searchString"]),
    shoesFilter() {
      return () => {
        return (
          this.currentCategory
            ? this.allShoes.filter(
                (shoe) => shoe.category == this.currentCategory
              )
            : this.allShoes
        ).filter(
          (shoe) =>
            shoe.price >= this.rangePrice[0] * 1000000 &&
            shoe.price <= this.rangePrice[1] * 1000000 &&
            shoe.name.includes(this.searchString)
        );
      };
    },
    pages() {
      return () => {
        let numOfPages = 1;
        let count = this.shoesFilter().length;

        while (count / 12 > 1) {
          count = count / 12;
          numOfPages++;
        }
        return numOfPages;
      };
    },
    shoesOfPage() {
      return () => {
        return this.shoesFilter().filter((shoe, index) => {
          return index >= (this.page - 1) * 12 && index < this.page * 12;
        });
      };
    },
  },
};
</script>
<style lang=""></style>
