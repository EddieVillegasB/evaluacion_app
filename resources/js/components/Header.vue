<template>
    <header class="mb-8">
        <h1 class="text-6xl inline-block">{{current.title}}</h1>
        <button class="bg-yellow-400 p-1 border inline-block">
            <router-link :to="{name:current.link, params:{id:0}}">
                {{current.action}}
            </router-link>
        </button>
    </header>
</template>

<script>
    export default {
        name:'header',
        data(){
            return{
                required:true,
                routes:{
                    'turns.show':{title:'Turnos', link:'turns.store', action:'Nuevo turno'},
                    'turns.index':{title:'Turnos', link:'turns.show', action:'Nuevo turno'},
                    'movies.index':{title:'Peliculas', link:'movies.show',action:'Nueva pelicula'},
                    'movies.show':{title:'Peliculas', link:'movies.show',action:'Nueva pelicula'},
                }
            }
        },
        computed:{
            current(){
                return this.routes[this.$route.name]
            }
        }
    }
</script>