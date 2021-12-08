<template>
    <div class="col-5 m-auto">
        <label :for='nome' class='form-label'>{{ nome }}</label>
        <input :type='type' class="py-1 m-2 form-control" :placeholder='nome' :id='nome' :value='value' @input='$emit("input", $event.target.value)' @keypress.enter='adicionar' v-if="input">
        <textarea :type='type' class="py-1 m-2 form-control" :placeholder='nome' :id='nome' :value='value' @input='$emit("input", $event.target.value)' v-else-if="textarea"></textarea>
        <b-form-select :id='nome' v-model="genero" v-else-if="dropdown" @change='$emit("input", genero)'>
            <b-form-select-option value='' disabled>Escolha uma opção:</b-form-select-option>
            <b-form-select-option value='Ação'>Ação</b-form-select-option>
            <b-form-select-option value='Aventura'>Aventura</b-form-select-option>
            <b-form-select-option value='Esporte'>Esporte</b-form-select-option>
            <b-form-select-option value='Estratégia'>Estratégia</b-form-select-option>
            <b-form-select-option value='Luta'>Luta</b-form-select-option>
            <b-form-select-option value='Puzzle'>Puzzle</b-form-select-option>
            <b-form-select-option value='RPG'>RPG</b-form-select-option>
            <b-form-select-option value='Simulação'>Simulação</b-form-select-option>
            <b-form-select-option value='Tabuleiro'>Tabuleiro</b-form-select-option>
            <b-form-select-option value='Tiro'>Tiro</b-form-select-option>
        </b-form-select>
    </div>
</template>

<script>
export default {
    name: 'FormularioCampo',
    data() {
        return {
            genero: ''
        }
    },
    methods: {
        onChange(value) {
            console.log(value)
        }
    },
    props: {
        nome: String,
        type: String,
        input: Boolean,
        textarea: Boolean,
        dropdown: Boolean,
        value: String,
        jogo: Object
    },
    emits: ['input']
}
</script>

<style>

</style>
