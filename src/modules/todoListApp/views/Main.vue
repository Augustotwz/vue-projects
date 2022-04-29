<template>
  <div>
    <TheHeader />
    <BarOptions />
    <BarFilters v-if="$store.state.todolist.filtersApplied.length !== 0"/>
    <div v-for="task in taskList" :key="task.id">
      <TaskItem :task='task' />
    </div>
    <div
      v-if="taskList.length === 0"
      class="d-flex align-center justify-center"
      style="height: 150px;"
    >
      <v-btn text disabled rounded>
        Crie sua Lista de Tarefas
      </v-btn>
    </div>
  </div>
</template>

<script>
import TheHeader from '../components/TheHeader.vue'
import BarOptions from '../components/BarOptions.vue'
import BarFilters from '../components/BarFilters.vue'
import TaskItem from '../components/TaskItem.vue'

export default {
  components: {
    TheHeader,
    BarOptions,
    BarFilters,
    TaskItem
  },
  computed: {
    taskList() {
      return this.$store.getters['todolist/getTasks']
    }
  },
  created() {
    this.$store.dispatch('todolist/getAllTasks')
  }
}
</script>