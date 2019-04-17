<template>
  <nav>
    <v-toolbar flat app>
      <v-toolbar-side-icon
        class="primary"
        @click="drawer = !drawer"
      ></v-toolbar-side-icon>
      <v-toolbar-title class="text-uppercase">
        <span class="font-weight-light">Todo</span>
        <span>Ninja</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <div class="text-xs-center">
        <v-menu offset-y>
          <v-btn color="primary" dark slot="activator">
            <v-icon left>expand_more</v-icon>
            <span>Menu</span>
          </v-btn>
          <v-list>
            <v-list-tile
              v-for="link in links"
              :key="link.text"
              router
              :to="link.route"
            >
              <v-list-tile-title>{{ link.text }}</v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>
      </div>
      <v-btn flat color="primary">
        <span>Sign Out</span>
        <v-icon right>exit_to_app</v-icon>
      </v-btn>
    </v-toolbar>

    <v-navigation-drawer app v-model="drawer" class="primary">
      <v-layout column align-center>
        <v-flex class="mt-5"
          ><v-avatar size="100" color="primary darken-4">
            <img src="/avatar-1.png" alt="alt" />
            <p class="white--text subheading mt-1"></p>
          </v-avatar>
        </v-flex>

        <v-flex class="mt-4 mb-3">
          <Popup></Popup>
        </v-flex>
      </v-layout>
      <v-list light dense>
        <v-list-tile
          dark
          v-for="link in links"
          :key="link.text"
          router
          :to="link.route"
        >
          <v-list-tile-action>
            <v-icon class="white--text">{{ link.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="white--text">
              {{ link.text }}
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>
<script>
import Popup from "./Popup";
export default {
  components: { Popup },
  data() {
    return {
      drawer: false,
      links: [
        { icon: "dashboard", text: "Dashboard", route: "/" },
        { icon: "folder", text: "My projects", route: "/project" },
        { icon: "person", text: "Team", route: "/team" },
        { icon: "domain", text: "Sectors", route: "/sectors" }
      ]
    };
  }
};
</script>
