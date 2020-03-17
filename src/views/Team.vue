<template>
  <div>
    <h1 class="subheading grey--text">Team</h1>
    <v-container class="my-3" grid-list-lg>
      <v-layout row wrap>
        <v-flex v-for="person in team" :key="person.name" xs12 sm6 md4 lg3>
          <v-card flat class="text-xs-center ma-3 pa-1">
            <v-responsive class="pt-4">
              <v-avatar size="80" color="grey">
                <img :src="person.avatar" />
              </v-avatar>
            </v-responsive>
            <v-card-text
              ><div class="subheading">
                {{ person.name }}
              </div>
              <div class="grey--text">
                {{ person.role }}
              </div>
              <v-card-actions>
                <v-btn flat color="grey">
                  <v-icon small left>message</v-icon>
                  <span>Message</span>
                </v-btn>
              </v-card-actions>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      team: [
        {
          name: "The Net Ninja",
          role: "Web developer",
          avatar: "/avatar-1.png"
        },
        { name: "Ryu", role: "Graphic designer", avatar: "/avatar-2.png" },
        { name: "Chun Li", role: "Web developer", avatar: "/avatar-3.png" },
        {
          name: "Gouken",
          role: "Social media maverick",
          avatar: "/avatar-4.png"
        },
        { name: "Yoshi", role: "Sales guru", avatar: "/avatar-5.png" }
      ]
    };
  }
};
</script>
