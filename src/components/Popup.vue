<template>
  <v-dialog max-width="600px" transition="dialog-transition"
    ><v-btn slot="activator" color="primary darken-2" flat
      >Add new project</v-btn
    >
    <v-card
      ><v-card-title primary-title><h2>Add a new project</h2> </v-card-title
      ><v-card-text
        ><v-form ref="form" class="px-3"
          ><v-text-field
            v-model="title"
            label="Title"
            prepend-icon="folder"
            :rules="inputRules"
          ></v-text-field>
          <v-spacer></v-spacer>
          <v-textarea
            v-model="content"
            solo
            label="Information"
            prepend-icon="edit"
            :rules="inputRules"
          ></v-textarea>
          <v-spacer></v-spacer>
          <v-menu v-model="menu" :close-on-content-click="false" full-width>
            <v-text-field
              slot="activator"
              prepend-icon="date_range"
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
  computed: {
    formattedDate() {
      return this.due ? format(this.due, "Do MMM YYYY") : "";
    }
  },
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        console.log(this.title, this.content, this.due);
      }
    }
  }
};
</script>
