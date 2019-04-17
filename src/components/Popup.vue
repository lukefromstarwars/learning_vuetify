<template>
  <v-dialog max-width="600px" transition="dialog-transition"
    ><v-btn color="primary darken-2" flat slot="activator"
      >Add new project</v-btn
    >
    <v-card
      ><v-card-title primary-title><h2>Add a new project</h2> </v-card-title
      ><v-card-text
        ><v-form class="px-3"
          ><v-text-field
            label="Title"
            v-model="title"
            prepend-icon="folder"
          ></v-text-field>
          <v-textarea
            solo
            label="Information"
            v-model="content"
            prepend-icon="edit"
          ></v-textarea>
          <v-btn flat class="success mx-0 mt-3" @click="submit"
            >Add project</v-btn
          >
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  data() {
    return {
      title: "",
      content: ""
    };
  },
  methods: {
    submit() {
      console.log(this.title, this.content);
    }
  }
};
</script>
