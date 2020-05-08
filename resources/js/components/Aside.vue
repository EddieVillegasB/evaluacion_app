<template>
    <nav class="bg-blue-900 w-1/6 h-screen">
        <ul class="text-center">
            <li v-for="(link, index) in links" :key="index" class="border border-black p-2">
                <router-link :to="{name:link.name}">
                    {{link.tex}}
                </router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
    export default {
        data: () => ({links:[
            {text:'Dashboard', name:'dashboard'}, 
            {tex:'Peliculas', name:'movies'}, 
            {text:'Turnos', name:'turns'}, 
            {text:'Administradores', name:'admin'},
            {text:'Perfil', name:'profil'},  
            {text:'Cerrar Secion', name:'logout'}
        ]})
    }
</script>