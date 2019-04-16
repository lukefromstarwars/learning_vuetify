<template>
  <div>
    <h1 class="subheading grey--text">Dashboard</h1>
    <v-container grid-list-md class="mx-0 my-5">
      <v-layout row wrap>
        <v-flex xs12 md6>
          <v-card dark tile flat color="warning">
            <v-card-text>#1</v-card-text>
            <v-btn block color="warning darken-4">text</v-btn>
          </v-card>
        </v-flex>
        <v-flex xs12 md2>
          <v-card dark tile flat color="error">
            <v-card-text>#2</v-card-text>
            <v-btn block color="warning darken-4">text</v-btn>
          </v-card>
        </v-flex>
        <v-flex xs12 md2>
          <v-card dark tile flat color="primary">
            <v-card-text>#2</v-card-text>
            <v-btn block color="warning darken-4">text</v-btn>
          </v-card>
        </v-flex>
        <v-flex xs12 md2>
          <v-card dark tile flat color="secondary">
            <v-card-text>#2</v-card-text>
            <v-btn block color="warning darken-4">text</v-btn>
          </v-card>
        </v-flex>
      </v-layout>
      <v-layout row wrap justify-space-around>
        <v-flex xs4 md3>
          <v-btn block color="warning darken-4">1</v-btn>
        </v-flex>
        <v-flex xs4 md3>
          <v-btn block color="warning darken-4">2</v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  components: {}
};
</script>
