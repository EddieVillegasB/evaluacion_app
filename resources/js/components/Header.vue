<template>
    <header class="mb-8">
        <h1 class="text-6xl inline-block">{{current.title}}</h1>
        <button class="bg-yellow-400 p-1 border inline-block">
            <router-link :to="{name:current.link}">
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
                    'movies.store':{title:'Peliculas', link:'movies.store',action:'Nueva pelicula'},
                    'movies.show':{title:'Peliculas', link:'movies.show',action:'Nueva pelicula'},
                    'movies.index':{title:'Peliculas', link:'movies.store',action:'Nueva pelicula'},
                    'turns.store':{title:'Turnos', link:'turns.store', action:'Nuevo turno'},
                    'turns.index':{title:'Turnos', link:'turns.store', action:'Nuevo turno'}
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