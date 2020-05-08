<template>
    <nav class="bg-blue-900 w-1/6 h-screen">
        <ul class="text-center">
            <li v-for="(link, index) in links" :key="index" class="border border-black p-2">
                <a href="#">
                    {{link}}
                </a>
            </li>
        </ul>
    </nav>
</template>

<script>
    export default {
        data: () => ({links:['Dashboard', 'Peliculas', 'Turnos', 'Administradores','Perfil', 'Cerrar Secion']})
    }
</script>