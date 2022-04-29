<template>
  <v-dialog v-model="openDialog" max-width="600px">
    <v-card>
      <v-card-title>
        <span class="text-h5">Selecionar Filtro</span>
      </v-card-title>

      <v-card-text>
        <v-container>
          <v-row>
            <v-col
              cols="12"
              sm="12"
              md="12"
            >
              <v-select
                :items="tagsList"
                v-model="filtersSelected"
                placeholder="TAGS"
                :menu-props="{ maxWidth: '350px' }"
                chips
                deletable-chips
                multiple
                clearable
              ></v-select>
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
          :disabled='filtersSelected.length === 0'
          @click="applyFilters()"
        >
          APLICAR
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
      filtersSelected: []
    }
  },
  computed : {
    openDialog: {
      get () { return this.dialog },
      set () {
        this.filtersSelected = []
        this.$emit('close-dialog')
      }
    },
    tagsList() {
      return this.$store.getters['todolist/getFilters']
    }
  },
  methods: {
    applyFilters() {
      this.$store.dispatch('todolist/applyFilters', this.filtersSelected)
      this.openDialog = false
    }
  }
}
</script>