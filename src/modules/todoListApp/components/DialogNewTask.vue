<template>
  <v-dialog v-model="openDialog" max-width="600px">
    <v-card>
      <v-card-title>
        <span class="text-h5">Nova Tarefa</span>
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
                v-model="newTask.title"
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
                v-model="newTask.tag"
                hint="Exemplo: faculdade, trabalho, compras"
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-textarea
                outlined
                no-resize
                v-model="newTask.description"
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
          :disabled='newTask.title.length < 3'
          @click="saveNewTask()"
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
    dialog: Boolean
  },
  data() {
    return {
      newTask: {
        title: '',
        tag: '',
        description: ''
      }
    }
  },
  computed : {
    openDialog: {
      get () { return this.dialog },
      set () {
        this.$emit('close-dialog')
        this.newTask = { title: '', tag: '', description: '' }     
      }
    }
  },
  methods: {
    saveNewTask () {
      this.$store.dispatch('todolist/insertNewTask', this.newTask)
      this.openDialog = false
    }
  }
}
</script>