<template>
  <v-dialog v-model="openDialog" max-width="600px">
    <v-card>
      <v-card-title>
        <span class="text-h5">Editar Tarefa</span>
      </v-card-title>

      <v-card-text>
        <v-container>
          <v-row>
            <v-col
              cols="12"
              sm="12"
              md="8"
            >
              <v-text-field
                label="Título"
                v-model="editedTask.title"
                required
              ></v-text-field>
            </v-col>
            <v-col
              cols="12"
              sm="6"
              md="4"
            >
              <v-text-field
                label="TAG"
                v-model="editedTask.tag"
                hint="Exemplo: faculdade, trabalho, compras"
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-textarea
                outlined
                no-resize
                v-model="editedTask.description"
                label="Descrição"
              ></v-textarea>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="gray darken-1"
          rounded
          text
          @click="openDialog = false"
        >
          CANCELAR
        </v-btn>
        <v-btn
          color="blue darken-1"
          rounded
          text
          :disabled='editedTask.title.length < 3'
          @click="editTask()"
        >
          SALVAR
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    dialog: Boolean,
    task: Object
  },
  data() {
    return {
      editedTask: {
        title: '',
        tag: '',
        description: ''
      }
    }
  },
  computed : {
    openDialog: {
      get () { this.setTaskProperties(); return this.dialog },
      set () { this.$emit('close-dialog') }
    }
  },
  methods: {
    editTask () {
      this.$store.dispatch('todolist/editTask', this.editedTask)
      this.openDialog = false
    },
    setTaskProperties () {
      this.editedTask.id = this.task.id
      this.editedTask.title = this.task.title
      this.editedTask.tag = this.task.tag
      this.editedTask.description = this.task.description
    }
  }
}
</script>