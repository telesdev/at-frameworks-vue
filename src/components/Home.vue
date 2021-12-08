<template>
    <div class="container text-center">

        <div>
        <pre>"Mude o nome da locadora no input abaixo:"</pre>

            <b-form-input v-model="locadoraNome" type="text"></b-form-input>
            <button type="button" class="btn btn-outline-secondary btn-sm my-3"
                @click.prevent.stop='saveNome'
            >
                Alterar Nome da Locadora
            </button>
            <pre>"Número de caracteres do nome da locadora: {{ this.numeroCaracteres }}</pre>
        </div>

        <h1>Locadora {{ $store.state.locadora.nome }}</h1>

        <hr/>

        <JogoFormulario :jogo='jogo' @registrou='cadastrar'></JogoFormulario>

        <hr/>
        
        <JogoLista>
            <JogoItem v-for="jogo in jogos" :key="jogo.id" :jogo='jogo' :jogos='jogos'></JogoItem>
        </JogoLista>

    </div>
</template>

<script>
import JogoFormulario from "./JogoFormulario.vue";
import JogoLista from "./JogoLista.vue";
import JogoItem from "./JogoItem.vue";

export default {
    components: {
        JogoFormulario,
        JogoLista,
        JogoItem
    },
    data () {
        return {
            jogos: [],
            jogo: {
                nome: '',
                genero: '',
                dataLancamento: '',
                descricao: ''
            },
            locadoraNome: ''
        }
    },
    methods: {
        carregar () {
            fetch('https://api.npoint.io/391c184794ba13e0cd75')
            .then(res => res.json())
            .then(data => this.jogos = data)
            this.jogos = []
        },
        saveNome() {
            this.$store.dispatch('saveLocadoraName', this.locadoraNome)
            this.locadoraNome = ''
        },
        cadastrar() {
            if (!this.jogo.nome){
                this.jogo = {}
                return alert('Nome é obrigatório')
            } else if (!this.jogo.genero) {
                this.jogo = {}
                return alert('Gênero é obrigatório')
            } else if (!this.jogo.dataLancamento) {
                this.jogo = {}
                return alert ('Data de Lançamento é obrigatória')
            } else if (!this.jogo.descricao) {
                this.jogo = {}
                return alert ('Descrição é Obrigatória')
            }

            let jogo = {
                id: this.jogos[this.jogos.length-1].id + 1,
                nome: this.jogo.nome,
                genero: this.jogo.genero,
                alugado: false,
                dataLancamento: this.jogo.dataLancamento,
                descricao: this.jogo.descricao
            }
            this.jogos.push(jogo)
            this.jogo = {}
        }
    },
    computed: {
        numeroCaracteres() {
            return this.$store.getters.numeroCaracteres
        }
    },
    mounted() {
        this.carregar()
    }
}
</script>

<style>

</style>
