import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    vivienda: {
      id: 1,
      fechaVisita: new Date,
      tecnico: ""
    }
  },
  getters: {
    getVivienda(state){
      return state.vivienda
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
