<template>
    <ul class="flex justify-around">
        <li>
            <router-link href="#" :to="{path:this.item.path}">
                <img src="../../icons/edit-pencil.svg" class="w-4 cursor-pointer"/>
            </router-link>
        </li>
        <li>
            <a href="#">
                <img src="../../icons/view-list.svg" class="w-4 cursor-pointer"/>
            </a>
        </li>
        <li>
            <img src="../../icons/lock-closed.svg" class="w-4 cursor-pointer"/>
        </li>
        <li>
            <a href="#" @click="remove">
                <img src="../../icons/trash.svg" class="w-4 cursor-pointer"/>
            </a>
        </li>
    </ul>
</template>

<script>
    export default {
        props:{
            item:{
                required:true
            }
        },
        data(){
            return{
                icons:[{}]
            }
        },
        methods:{
            async remove(){
                const URL = `v1/${this.item.path}`
                try {
                    await axios.delete(URL)
                } catch (error) {
                    console.log(error)
                }
            }
        }
    }
</script>

<style>

</style>