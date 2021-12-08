<template>
    <form class="mx-auto mt-4">
        <FormularioCampo nome='Nome' v-model='jogo.nome' :adicionar="registrou" type='text' input></FormularioCampo>
        <FormularioCampo nome='Gênero' v-model='jogo.genero' :adicionar="registrou" type='text' dropdown></FormularioCampo>
        <FormularioCampo nome='Data de Lançamento' v-model='jogo.dataLancamento' :adicionar="registrou" type='date' input></FormularioCampo>
        <FormularioCampo nome='Descrição' v-model='jogo.descricao' :adicionar="registrou" textarea></FormularioCampo>
        <button class="btn btn-primary m-2" type="button" @click='registrou'>Adicionar</button>
    </form>    
</template>

<script>
import FormularioCampo from "./FormularioCampo.vue";
export default {
    name : 'JogoFormulario',
    components: { FormularioCampo },
    props: {
        jogo: Object
    },
    methods: {
        registrou(){
            this.$emit("registrou", this.jogo)
        }
    },
    emits: ['registrou']
}
// export default {
//     date() {
//         return {
//             value: '',
//             selected: ''
//         }
//     },
//     name : 'JogoFormulario',
//     components: { FormularioCampo },
//     props: {
//         jogos: Array,
//         jogo: Object
//     },
//     methods: {
//         cadastrar() {
//             let jogoForm = {
                
//                 nome: this.jogo.nome,
//                 genero: this.jogo.genero,
//                 alugado: false,
//                 dataLancamento: this.jogo.dataLancamento,
//                 descricao: this.jogo.descricao
//             }
//             this.$store.commit('saveJogo', jogoForm)
//         }
//     },
//     computed: {
//         nome: {
//             get(){
//                 return this.$store.state.jogo.nome
//             },
//             set(value){
//                 this.$store.commit('saveNome', value)
//             }
//         },
//         genero: {
//             get(){
//                 return this.$store.state.jogo.genero
//             },
//             set(value){
//                 this.$store.commit('saveGenero', value)
//             }
//         },
//         dataLancamento: {
//             get(){
//                 return this.$store.state.jogo.dataLancamento
//             },
//             set(value){
//                 this.$store.commit('saveDataLancamento', value)
//             }
//         },
//         descricao: {
//             get(){
//                 return this.$store.state.jogo.descricao
//             },
//             set(value){
//                 this.$store.commit('saveDescricao', value)
//             }
//         }
//     },
//     emits: ['registrou']
// }
</script>

<style>

</style>
