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

</script>

<style>

</style>
