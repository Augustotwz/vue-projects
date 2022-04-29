<template>
  <div class="list-item">
    <div class="item-tag">
      <v-chip
        v-if="task.tag.length !== 0"
        color="blue"
        outlined
        small
      >
        {{ task.tag }}
      </v-chip>
    </div>
    
    <div class="item-content">
      <div class="task-title"> {{ task.title }} </div>
      <div class="task-description"> {{ task.description }} </div>
    </div>

    <v-spacer></v-spacer>

    <div class="item-actions">
      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            v-bind="attrs"
            v-on="on"
            icon
            @click="finish(task)"
          >
            <v-icon color="success">mdi-check-circle-outline</v-icon>
          </v-btn>
        </template>
        <span>Finalizar tarefa</span>
      </v-tooltip>

      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            v-bind="attrs"
            v-on="on"
            icon
            @click="dialogEditTask = true"
          >
            <v-icon color="primary">mdi-pencil</v-icon>
            <DialogEditTask
              :task="task"
              :dialog="dialogEditTask"
              @close-dialog='dialogEditTask = false'
            />
          </v-btn>
        </template>
        <span>Editar</span>
      </v-tooltip>

      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            v-bind="attrs"
            v-on="on"
            icon
            @click="deleteItem(task.id)"
          >
            <v-icon color="red">mdi-close-circle-outline</v-icon>
          </v-btn>
        </template>
        <span>Remover</span>
      </v-tooltip>
    </div>
  </div>
</template>

<script>
import DialogEditTask from './DialogEditTask.vue'

export default {
  components: {
    DialogEditTask
  },
  props: {
    task: Object
  },
  data () {
    return {
      dialogEditTask: false
    }
  },
  methods: {
    finish(taskId) {
      this.$store.dispatch('todolist/finishTask', taskId)
    },
    deleteItem(taskId) {
      this.$store.dispatch('todolist/deleteTask', taskId)
    }
  }
}
</script>

<style scoped>
.list-item {
  padding: 15px;
  border: 1px solid #F1F1F1;
  display: flex;
}
.item-tag {
  border-right: 2px solid #F1F1F1;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 125px;
}
.item-content {
  padding-left: 20px;
  height: auto;
}
.task-title {
  display: flex;
  flex-direction: row;
  justify-content: start;
  font-weight: 500;
}
.task-description {
  white-space: pre-line;
}
.item-actions {
  border-left: 2px solid #F1F1F1;
  padding-left: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
