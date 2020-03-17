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
        <span>{{ $t("load_sectors") }}</span>
      </v-btn>
      <v-spacer></v-spacer>
      <h2>Status : {{ status }}</h2>
      <v-expansion-panel>
        <v-expansion-panel-content v-for="sector in sectors" :key="sector.id">
          <template v-slot:header>
            <div>
              <v-badge left>
                <template v-slot:badge>
                  <span>{{ sector.order }}</span>
                </template>
                <span>{{ sector.name.localized }}</span>
              </v-badge>
            </div>
          </template>
          <v-card>
            <v-card-text class="px-4 grey--text">
              {{ sector.description.localized }}</v-card-text
            >
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      sectors: [],
      status: "Click to load",
      loading: false,
      locale: "fr"
    };
  },
  watch: {
    locale(val) {
      this.$i18n.locale = val;
    }
  },
  mounted() {},
  methods: {
    loadSectors() {
      this.axios
        .get("https://localhost:44382/api/sectors")
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
<i18n>
{
  "fr": {
    "load_sectors": "Liste des sectors"
  },
  "nl": {
        "load_sectors": "Sectoren lijst"
  }
}
</i18n>
-
