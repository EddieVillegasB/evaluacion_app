<template>
    <section class="border border-black">
        <List :columns="columns">
            <tr v-for="(turn,index) in turns" :key="index">
                <td>{{turn.id}}</td>
                <td>{{turn.time}}</td>
                <td>{{turn.status | isActive}}</td>
                <td><Actions :item="turn" :action="'turns/DELETE_TURN'"/></td>
            </tr>
        </List>
    </section>
</template>

<script>
    import List from '../List'
    import Actions from '../Actions'
    import Turn from '../../models/turn/index'
    export default {
        name: 'turns',
        data:()=> ({columns:['id','turno','estado','']}),
        components:{
            List,
            Actions
        },
        computed:{
            turns(){
                return this.$store.getters['turns/turns']
            }
        },
        methods:{
            async getTurns(){
                const URL = '/v1/turns'
                try {
                    const {data:{turns}} = await axios.get(URL)
                    this.$store.dispatch('turns/SET_TURNS', {turns:turns.map(Turn.create)})
                } catch (error) {
                    console.log(error)
                }
            }
        },
        created(){
            this.getTurns()
        }
    }
</script>