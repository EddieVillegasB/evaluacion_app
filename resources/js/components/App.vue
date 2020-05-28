<template>
    <div class="bg-gray-200 h-full">
        <navbar/>
        <div class="flex">
            <nav2 @show="show"/>
            <div class="bg-gray-200 w-full w-5/6 p-5">
                <Head/>
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>
<script>
    import Head from './AppHeader'
    import nav2 from '../components/AppAside'
    import navbar from '../components/AppNavbar'
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
            navbar,
            movies,
            nav2,
            Head
        },
        methods:{
            show(route){
                this.route = route
            }
        }
    }
</script>