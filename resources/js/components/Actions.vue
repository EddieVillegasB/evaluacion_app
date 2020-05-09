<template>
    <ul class="flex justify-around">
        <li>
            <router-link :to="{path:this.item.fullPath}">
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
            <button type="button" @click="remove">
                <img src="../../icons/trash.svg" class="w-4 cursor-pointer"/>
            </button>
        </li>
    </ul>
</template>

<script>
    export default {
        name:'Actions',
        props:{
            item:{
                required:true,
                type: Object
            },
            action:{
                required:true,
                type: String
            }
        },
        data(){
            return{
                icons:[{}]
            }
        },
        methods:{
            async remove(e){
                e.preventDefault()
                const URL = `v1/${this.item.fullPath}`
                try {
                    this.$store.dispatch(this.action, {id:this.item.id});
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