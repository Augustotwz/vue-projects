let getObjectAndIndex = (array, id) => {
  let obj = array.filter(e => { return e.id === id })[0]
  let index = array.indexOf(obj)
  return { index, obj }
}

let getNextId = (array) => {
  let lastId = 0
  array.forEach(element => { if (element.id > lastId) lastId = element.id })
  return lastId + 1
}

let saveLocalStorage = (tasks) => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

let generateFilters = (tasks) => {
  let filters = []
  for (let i = 0; i < tasks.length; i++) {
    if (!filters.includes(tasks[i].tag)) filters.push(tasks[i].tag)
  }
  return filters
}

export default {
  namespaced: true,

  state: {
    taskList: [],
    // finishedTasks: [],
    filters: [],
    filtersApplied: []
  },

  getters: {
    getTasks: state => {
      let tasks = state.taskList
      let filters = state.filtersApplied
      if (filters.length === 0) return tasks
      return tasks.filter(task => { return filters.some(tagName => tagName === task.tag) })
    },
    getFilters: state => { return state.filters },
    getFiltersApplied: state => { return state.filtersApplied }
  },

  mutations: {
    updateFilters (state, filters) {
      state.filtersApplied = filters
    },

    setTaskList (state, tasks) {
      state.filters = generateFilters(tasks)
      state.taskList = tasks
    },

    insertNewTask (state, newTask) {
      newTask.id = getNextId(state.taskList)
      newTask.tag = newTask.tag.toUpperCase()
      state.taskList.push(newTask)
      saveLocalStorage(state.taskList)
      state.filters = generateFilters(state.taskList)
    },

    editTask (state, task) {
      let { index } = getObjectAndIndex(state.taskList, task.id)
      let oldTask = state.taskList[index]
      oldTask.title = task.title
      oldTask.tag = task.tag.toUpperCase()
      oldTask.description = task.description
      saveLocalStorage(state.taskList)
      state.filters = generateFilters(state.taskList)
    },

    finishTask (state, task) {
      let { index } = getObjectAndIndex(state.taskList, task.id)
      if (index === -1) return
      // state.finishedTasks.push(task)
      state.taskList.splice(index, 1)
      saveLocalStorage(state.taskList)
      state.filters = generateFilters(state.taskList)
    },

    deleteTask (state, id) {
      let { index } = getObjectAndIndex(state.taskList, id)
      if (index != -1) state.taskList.splice(index, 1)
      saveLocalStorage(state.taskList)
      state.filters = generateFilters(state.taskList)
    }
  },

  actions: {
    applyFilters ({ commit }, filters) {
      commit('updateFilters', filters)
    },

    insertNewTask ({ commit }, task) {
      commit('insertNewTask', task)
    },

    editTask ({ commit }, task) {
      commit('editTask', task)
    },

    finishTask ({ commit }, task) {
      commit('finishTask', task)
    },

    deleteTask ({ commit }, taskId) {
      commit('deleteTask', taskId)
    },

    getAllTasks ({commit}) {
      if (localStorage.getItem('tasks')) {
        let tasks = JSON.parse(localStorage.getItem('tasks'))
        commit('setTaskList', tasks)
      } else {
        saveLocalStorage([])
      }
    }
  }
}