<template>
    <div class="bg-gray-200 h-full">
        <navbar/>   
        <div class="flex">
            <nav2/>
            <div class="bg-blue-500 w-full w-5/6 p-5">
                <header>
                    <h1 class="text-6xl inline-block">{{'Peliculas'}}</h1>
                    <button class="bg-yellow-400 p-1 border inline-block">{{'Nueva Pelicula'}}</button>
                </header>
                <movies/>
            </div>
        </div>
    </div>
</template>
<script>
    import navbar from '../components/Navbar'
    import movies from '../components/movies/index'
    import nav2 from '../components/Aside'
    export default {
        components:{
            navbar,
            movies,
            nav2
        }
    }
</script>