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
  // state: {
  //   jogos: [],
  //   jogo: {
  //     id: '',
  //     nome: '',
  //     genero: '',
  //     dataLancamento: '',
  //     descricao: ''
  //   },
  //   about: {
  //     title: 'This is a About Page'
  //   }
  // },
  // mutations: {
  //   saveJogo(state, payload) {
  //     state.jogos.push(payload)
  //   },
  //   saveNome(state, nome){
  //     state.jogo.nome = nome
  //   },
  //   saveGenero(state, genero){
  //     state.jogo.genero = genero
  //   },
  //   saveDataLancamento(state, dataLancamento){
  //     state.jogo.dataLancamento = dataLancamento
  //   },
  //   saveDescricao(state, descricao){
  //     state.jogo.descricao = descricao
  //   },
  // },
  // actions: {
  //   saveJogo(context, payload){
  //     context.commit('saveJogo', payload)
  //   }
  // },
  // modules: {
  // }
})
