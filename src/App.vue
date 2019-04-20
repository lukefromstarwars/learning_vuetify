<template>
  <v-app>
    <Navbar class="light-grey" />
    <v-content class="ml-4 mr-1 my-3">
      <router-view></router-view>
    </v-content>
    <HelloI18n></HelloI18n>
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar";
import HelloI18n from "@/components/HelloI18n";
export default {
  name: "App",
  components: {
    Navbar,
    HelloI18n
  },
  data() {
    return {
      //
    };
  }
};
</script>
