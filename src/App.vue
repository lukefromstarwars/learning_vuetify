<template>
  <v-app>
    <Navbar class="light-grey" />
    <v-content class="ml-4 mr-1 my-3">
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar";
export default {
  name: "App",
  components: {
    Navbar
  },
  data() {
    return {
      //
    };
  }
};
</script>
