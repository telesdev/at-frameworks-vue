<template>
    <div class="card m-4 rounded-3 shadow-sm border-success" v-if="!jogo.alugado">
        <div class='card-body'>
            <input class="py-1 mt-1 mb-3 form-control" v-if="alterando == jogo" v-model="jogo.nome" placeholder="Nome">
            <h4 class="card-title" v-else>{{ jogo.nome }}</h4>
            <input class="py-1 mb-3 form-control" v-if="alterando == jogo" v-model="jogo.genero" placeholder="Gênero">
            <p class="card-text" v-else><strong>Gênero</strong>:<br/>{{ jogo.genero }}</p>
            <input class="py-1 mb-3 form-control" v-if="alterando == jogo" v-model="jogo.dataLancamento" placeholder="Data de Lançamento" type="date">
            <p class="card-text" v-else><strong>Data de Lançamento:</strong><br/>{{ (new Date(jogo.dataLancamento).getDate()+1)+'/' + (new Date(jogo.dataLancamento).getMonth()+1)+'/' + new Date(jogo.dataLancamento).getFullYear() }}</p>
            <textarea class="py-1 mb-3 form-control" v-if="alterando == jogo" v-model="jogo.descricao" placeholder="Descrição"></textarea>
            <p class="card-text" v-else><strong>Descrição:</strong><br/>{{ jogo.descricao }}</p>     
            <button class="btn btn-outline-success mx-3 mb-4 col-10" @click='alugar'>Alugar</button>
            <button class="btn btn-outline-secondary mx-3 mb-4 col-10" @click='editar(jogo)'>Editar</button>
            <button class="btn btn-outline-danger mx-3 mb-4 col-10" @click='apagar(jogo)'>Deletar</button>
        </div>
    </div>
    <div class="card m-4 rounded-3 shadow-sm border-danger" v-else>
        <div class='card-body'>
            <input class="py-1 mt-1 mb-3 form-control" v-if="alterando == jogo" v-model="jogo.nome" placeholder="Nome">
            <h4 class="card-title" v-else>{{ jogo.nome }}</h4>
            <input class="py-1 mb-3 form-control" v-if="alterando == jogo" v-model="jogo.genero" placeholder="Gênero">
            <p class="card-text" v-else><strong>Gênero</strong>:<br/>{{ jogo.genero }}</p>
            <input class="py-1 mb-3 form-control" v-if="alterando == jogo" v-model="jogo.dataLancamento" placeholder="Data de Lançamento" type="date">
            <p class="card-text" v-else><strong>Data de Lançamento:</strong><br/>{{ (new Date(jogo.dataLancamento).getDate()+1)+'/' + (new Date(jogo.dataLancamento).getMonth()+1)+'/' + new Date(jogo.dataLancamento).getFullYear() }}</p>
            <textarea class="py-1 mb-3 form-control" v-if="alterando == jogo" v-model="jogo.descricao" placeholder="Descrição"></textarea>
            <p class="card-text" v-else><strong>Descrição:</strong><br/>{{ jogo.descricao }}</p>
            <button class="btn btn-warning mx-3 mb-4 col-10" @click='alugar'>Jogo Alugado - Devolver</button>
            <button class="btn btn-outline-secondary mx-3 mb-4 col-10" @click='editar(jogo)'>Editar</button>
            <button class="btn btn-outline-danger mx-3 mb-4 col-10" @click='apagar(jogo)'>Deletar</button>
        </div>
    </div>
    
</template>

<script>
export default {
    data: () => {
        return {
            alterando: null
        }
    },
    name : 'JogoItem',
    props: {
        jogos: Array,
        jogo: Object
    },
    methods: {
        apagar(jogo) {
            this.jogos.splice(this.jogos.indexOf(jogo), 1)
        },
        alugar() {
            this.jogo.alugado = !this.jogo.alugado
        },
        editar(jogo) {
            if (this.alterando !== jogo){
                this.alterando = jogo
            } else {
                this.alterando = null
            }
        }
    }
}
</script>

<style>

</style>
