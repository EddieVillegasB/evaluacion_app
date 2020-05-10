<template>
    <nav class="bg-teal-500 w-1/6 h-screen">
        <ul class="text-center">
            <li class="border p-2">
                <router-link :to="{name:'movies'}" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                    {{'Peliculas'}}
                </router-link>
            </li>
            <li class="border p-2">
                <router-link :to="{name:'turns'}" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                    {{'Turnos'}}
                </router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
    export default {
        data: () => ({
            links:[
                //{text:'Dashboard', name:'dashboard'}, 
                {tex:'Peliculas', name:'movies.index'}, 
                {text:'Turnos', name:'turns.index'},
                //{text:'Administradores', name:'admin'},
                //{text:'Perfil', name:'profil'},  
                //{text:'Cerrar Secion', name:'logout'}
            ]})
    }
</script>