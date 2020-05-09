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
                    'turn':{title:'Turnos', link:'turn', action:'Nuevo turno'},
                    'turns':{title:'Turnos', link:'turn', action:'Nuevo turno'},
                    'movies':{title:'Peliculas', link:'movie',action:'Nueva pelicula'},
                    'movie':{title:'Peliculas', link:'movie',action:'Nueva pelicula'},
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