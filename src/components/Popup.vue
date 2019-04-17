<template>
  <v-dialog max-width="600px" transition="dialog-transition"
    ><v-btn color="primary darken-2" flat slot="activator"
      >Add new project</v-btn
    >
    <v-card
      ><v-card-title primary-title><h2>Add a new project</h2> </v-card-title
      ><v-card-text
        ><v-form class="px-3" ref="form"
          ><v-text-field
            label="Title"
            v-model="title"
            prepend-icon="folder"
            :rules="inputRules"
          ></v-text-field>
          <v-spacer></v-spacer>
          <v-textarea
            solo
            label="Information"
            v-model="content"
            prepend-icon="edit"
            :rules="inputRules"
          ></v-textarea>
          <v-spacer></v-spacer>
          <v-menu :close-on-content-click="false" full-width v-model="menu">
            <v-text-field
              prepend-icon="date_range"
              slot="activator"
              :value="formattedDate"
              clearable
              label="Due date"
              readonly
              :rules="inputRules"
            ></v-text-field>
            <v-date-picker v-model="due" @change="menu = false"></v-date-picker>
          </v-menu>
          <v-spacer></v-spacer>
          <v-btn flat class="success mx-0 mt-3" @click="submit"
            >Add project</v-btn
          >
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
<script>
import format from "date-fns/format";
export default {
  data() {
    return {
      title: "",
      content: "",
      due: null,
      menu: false,
      inputRules: [
        v => !!v || "This field is required",
        v => v.length > 3 || "Minimum length is 3 characters"
      ]
    };
  },
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        console.log(this.title, this.content, this.due);
      }
    }
  },
  computed: {
    formattedDate() {
      return this.due ? format(this.due, "Do MMM YYYY") : "";
    }
  }
};
</script>
