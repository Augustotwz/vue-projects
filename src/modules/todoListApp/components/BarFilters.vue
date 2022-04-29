<template>
  <div class="filters-box">
    <v-chip
      v-for="filter in filtersApplied" :key="filter"
      @click:close="removeFilter(filter)"
      class="ml-1"
      small
      close 
    >
      {{ filter }}
    </v-chip>
  </div>
</template>

<script>
export default {
  computed: {
    filtersApplied() {
      return this.$store.getters['todolist/getFiltersApplied']
    }
  },
  methods: {
    removeFilter(filter) {
      let index = this.filtersApplied.indexOf(filter)
      this.filtersApplied.splice(index, 1)
      this.$store.dispatch('todolist/applyFilters', this.filtersApplied)
    }
  }
}
</script>

<style scoped>
.filters-box {
  display: flex;
  padding: 5px;
  padding-left: 10px;
}
</style>