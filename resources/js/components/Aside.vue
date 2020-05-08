<template>
    <nav class="bg-blue-900 w-1/6 h-screen">
        <ul class="text-center">
            <li class="border border-black p-2">
                <router-link :to="{name:'movies.index'}">
                    {{'Peliculas'}}
                </router-link>
            </li>
            <li class="border border-black p-2">
                <router-link :to="{name:'turns.index'}">
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