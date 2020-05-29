<template>
    <ul class="flex justify-around my-2">
        <template v-if="!movieExist">
            <li>
                <router-link :to="{path:this.item.fullPath}" title="edit">
                    <img src="../../icons/edit-pencil.svg" class="w-4 cursor-pointer"/>
                </router-link>
            </li>
            <li v-show="isAssing">
                <router-link :to="{name:'turns', query:{movie: this.item.id}}" title="assing turn">
                    <img src="../../icons/view-list.svg" class="w-4 cursor-pointer"/>
                </router-link>
            </li>
            <li>
                <a href="#" @click="toggleBlock" :title="item.status ? 'block' : 'unblock'">
                    <img src="../../icons/lock-open.svg" class="w-4 cursor-pointer" v-if="item.status"/>
                    <img src="../../icons/lock-closed.svg" class="w-4 cursor-pointer" v-else/>
                </a>
            </li>
            <li>
                <button type="button" @click="remove" title="delete">
                    <img src="../../icons/trash.svg" class="w-4 cursor-pointer"/>
                </button>
            </li>
        </template>
        <li v-else>
           <input type="checkbox" v-model="item.isSelected" @click="assing">
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
            },
            movie:{
                required: false,
                type: Object
            },
            isAssing:{
                required: true,
                type: Boolean
            }
        },
        data(){
            return{
                icons:[{}]
            }
        },
        computed:{
            turns(){
                return this.$store.getters['turns/selected']
            },
            movieExist(){
                return this.movie ? this.movie.hasOwnProperty('id') : false
            }
        },
        methods:{
            async assing(){
                this.item.isSelected = !this.item.isSelected
                const turns = this.turns.map(({id}) => id)
                try {
                    await axios.put(`/v1/${this.movie.fullPath}`, {turns})
                } catch (error) {
                    console.log(error)
                }
            },
            async remove(e){
                const URL = `v1/${this.item.fullPath}`
                try {
                    this.$store.dispatch(this.action, {id:this.item.id});
                    await axios.delete(URL)
                } catch (error) {
                    console.log(error)
                }
            },
            async toggleBlock(){
                const URL = `v1/${this.item.fullPath}`
                try {
                    //this.$store.dispatch(this.action, {id:this.item.id});
                    this.item.status = !this.item.status
                    await axios.put(URL, this.item)
                } catch (error) {
                    console.log(error)
                }
            }
        }
    }
</script>

<style>

</style>