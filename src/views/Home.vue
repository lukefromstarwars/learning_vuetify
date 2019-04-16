<template>
  <div class="home">
    <h1>Home page</h1>
    <v-btn class="pink white--text">Click me</v-btn>
    <v-btn depressed color="pink">Click again</v-btn>
    <v-btn flat color="lime darken-4">Click flat</v-btn>

    <v-btn depressed class="pink white--text">
      <v-icon right>donut_small</v-icon>Click again
    </v-btn>
    <v-btn depressed class="red white--text">
      <v-icon left>done_all</v-icon>Click again
    </v-btn>

    <v-btn depressed color="red">
      <v-icon>event</v-icon>
      <span>&nbsp;Click again</span>
    </v-btn>

    <v-btn depressed small color="red">
      <v-icon>event</v-icon>
      <span>&nbsp;Click again</span>
    </v-btn>

    <v-btn fab flat small dark color="success">
      <v-icon small>event</v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  components: {}
};
</script>
