<template>
  <v-app id="inspire">
    <v-main>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Sign Up</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form ref="form" v-model="valid" lazy-validation>
                  <v-alert v-show="showError" type="error">{{ error }}</v-alert>
                  <v-text-field
                    prepend-icon="person"
                    v-model="name"
                    :rules="nameRules"
                    label="Name"
                    required
                  >
                  </v-text-field>
                  <v-text-field
                    prepend-icon="email"
                    v-model="email"
                    :rules="emailRules"
                    label="Email"
                    required
                  >
                  </v-text-field>
                  <v-text-field
                    prepend-icon="phone"
                    v-model="phone"
                    :rules="phoneRules"
                    label="Phone"
                    required
                  >
                  </v-text-field>
                  <v-text-field
                    prepend-icon="home"
                    v-model="address"
                    :rules="addressRules"
                    label="Address"
                    required
                  >
                  </v-text-field>
                  <v-text-field
                    prepend-icon="person"
                    v-model="username"
                    :rules="usernameRules"
                    label="Username"
                    required
                  ></v-text-field>

                  <v-text-field
                    prepend-icon="lock"
                    v-model="password"
                    :rules="passwordRules"
                    label="Password"
                    type="password"
                    required
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="cyan" to="/login">Login</v-btn>
                <v-btn :disabled="!valid" color="primary" @click="handleClick"
                  >Signup</v-btn
                >
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      error: "",
      showError: false,
      valid: true,
      email: "",
      emailRules: [(v) => !!v || "Username is required"],
      password: "",
      passwordRules: [(v) => !!v || "Password is required"],
      name: "",
      nameRules: [(v) => !!v || "Name is required"],
      phone: "",
      phoneRules: [(v) => !!v || "Phone is required"],
      address: "",
      addressRules: [(v) => !!v || "Adress is required"],
      username: "",
      usernameRules: [(v) => !!v || "Adress is required"],
    };
  },
  methods: {
    ...mapActions(["signup"]),
    handleClick() {
      this.signup({
        name: this.name,
        email: this.email,
        phone: this.phone,
        address: this.address,
        username: this.username,
        password: this.password,
      }).catch(() => {
        this.error = "Sign up fail!";
        this.showError = true;
      });
    },
  },
};
</script>

<style></style>
