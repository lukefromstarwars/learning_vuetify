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
          <v-menu :close-on-content-click="false" full-width max-width="290">
            <v-text-field
              prepend-icon="calendar_today"
              slot="activator"
              :value="formattedDate"
              clearable
              label="Due date"
              readonly
            ></v-text-field>
            <v-date-picker
              v-model="due"
              @change="menu2 = false"
            ></v-date-picker>
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
      due: null
    };
  },
  methods: {
    submit() {
      console.log(this.title, this.content, this.due);
    }
  },
  computed: {
    formattedDate() {
      return this.due ? format(this.due, "Do MMM YYYY") : null;
    }
  }
};
</script>
