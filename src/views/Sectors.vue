<template>
  <div>
    <h1 class="subheading grey--text">Sectors</h1>

    <v-container class="my-3">
      <v-btn
        :loading="loading"
        :disabled="loading"
        color="primary"
        @click="loadSectors"
      >
        Load sectors
      </v-btn>
      <v-spacer></v-spacer>
      <h2>{{ status }}</h2>
      <v-expansion-panel>
        <v-expansion-panel-content v-for="sector in sectors" :key="sector.id">
          <template v-slot:header>
            <div>{{ sector.name }}</div>
          </template>
          <v-card>
            <v-card-text class="px-4 grey--text"
              ><div class="font-weight-bold">{{ sector.id }}</div>
              {{ sector.description }}</v-card-text
            >
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-container>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      sectors: [],
      status: "",
      loading: false
    };
  },
  methods: {
    loadSectors() {
      //   status => "Loading...";
      axios
        .get("https://localhost:44398/api/sectors")
        .then(response => {
          this.sectors = response.data;
          this.status = "Loaded";
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>
