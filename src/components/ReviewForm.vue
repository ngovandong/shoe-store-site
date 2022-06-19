<template lang="">
  <div>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field
        v-model="name"
        :counter="10"
        :rules="nameRules"
        label="Name"
        required
      ></v-text-field>

      <v-textarea
        solo
        name="input-7-4"
        :rules="reviewRules"
        v-model="review"
        label="Review"
      ></v-textarea>

      <v-rating
        v-model="rating"
        background-color="orange lighten-3"
        color="orange"
        large
      ></v-rating>

      <v-checkbox v-model="checkbox" label="Anonymous ?" required></v-checkbox>

      <v-btn :disabled="!valid" color="success" class="mr-4" @click="submit">
        Submit
      </v-btn>
      <v-btn color="error" class="mr-4" @click="reset"> Reset</v-btn>
    </v-form>
  </div>
</template>
<script>
export default {
  props: ["addReview"],
  data() {
    return {
      valid: false,
      name: "",
      nameRules: [
        (v) => !!v || "Name is required",
        (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
      ],
      review: null,
      reviewRules: [(v) => !!v || "Review is required"],
      rating: null,
      checkbox: null,
    };
  },
  methods: {
    submit() {
      this.name = !this.checkbox ? this.name : "Anonymous";
      this.addReview({
        name: this.name,
        content: this.review,
        star: this.rating,
      });
      this.reset();
    },
    reset() {
      this.$refs.form.reset();
      this.rating = null;
    },
  },
};
</script>
<style scoped>
.review-form {
  width: 400px;
  padding: 20px;
  margin: 40px;
  border: 1px solid #d8d8d8;
}

input {
  width: 100%;
  height: 25px;
  margin-bottom: 20px;
}

textarea {
  width: 100%;
  height: 60px;
}
</style>
