<template>
    <div class="bg-gray-200 h-full">
        <AppNavbar/>
        <div class="flex">
            <AppAside @show="show"/>
            <div class="bg-gray-200 w-full w-5/6 p-5">
                <AppHead/>
                <router-view/>
            </div>
        </div>
    </div>
</template>
<script>
    import AppHead from './AppHeader'
    import AppAside from '../components/AppAside'
    import AppNavbar from '../components/AppNavbar'
    import movies from '../components/movies/index'
    export default {
        data(){
            return {
                route:{
                    name: 'peliculas',
                    path: 'movies.create',
                    action: 'Nueva Pelicula'
                }
            }
        },
        components:{
            movies,
            AppHead,
            AppAside,
            AppNavbar,
        },
        methods:{
            show(route){
                this.route = route
            }
        }
    }
</script>