<template>
  <div class="options-bar">
    <v-btn
      text
      outlined
      rounded
      @click="dialogNewTask = true"
    >
      <v-icon left>mdi-plus</v-icon>
      Adicionar nova tarefa
      <DialogNewTask
        :dialog="dialogNewTask"
        @close-dialog='dialogNewTask = false'
      />
    </v-btn>
    <v-btn
      text
      outlined
      rounded
      class="ml-3"
      @click="dialogFilters = true"
    >
      <v-icon left>mdi-filter-variant</v-icon>
      Filtrar
      <DialogNewFilter
        :dialog="dialogFilters"
        @close-dialog='dialogFilters = false' 
      />
    </v-btn>
  </div>
</template>

<script>
import DialogNewTask from './DialogNewTask.vue'
import DialogNewFilter from './DialogNewFilter.vue'

export default {
  components: {
    DialogNewTask,
    DialogNewFilter
  },
  data() {
    return {
      dialogNewTask: false,
      dialogFilters: false
    }
  }
}
</script>

<style scoped>
.options-bar {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background: #F1F1F1;
  height: 45px;
  padding-left: 12px;
}
.options-bar button {
  background: #fff;
}
</style>