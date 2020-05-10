<template>
    <header class="flex items-center justify-between flex-wrap bg-teal-500 p-6 mb-8">
        <div class="flex items-center flex-shrink-0 text-white mr-6">
            <span class="font-semibold text-xl tracking-tight">{{current.title}}</span>
        </div>
        <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            <div>
                <router-link 
                    href="#" 
                    class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
                    :to="{name:current.name}"
                >
                {{current.action}}
                </router-link>
            </div>
        </div>
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