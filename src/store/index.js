import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    locadora: {
      nome: 'Master Games'
    }
  },
  mutations: {
    saveLocadoraName(state, payload) {
      state.locadora.nome = payload
    }
  },
  actions: {
    saveLocadoraName(context, payload) {
      context.commit('saveLocadoraName', payload)
    }
  },
  getters: {
    numeroCaracteres: state => {
      return state.locadora.nome.length
    }
  }
})
