<template>
    <section class="border border-black">
        <List :columns="columns" v-if="turns.isEmpty">
            <tr v-for="(turn,index) in turns.data" :key="index">
                <td>{{turn.id}}</td>
                <td>{{turn.time}}</td>
                <td>{{turn.status | isActive}}</td>
                <td><Actions :item="turn" :action="'turns/DELETE_TURN'"/></td>
            </tr>
        </List>
        <Empty :message="'No hay turnos'" v-else/>
    </section>
</template>

<script>
    import List from '../List'
    import Empty from '../Empty'
    import Actions from '../Actions'
    import Turn from '../../models/turn/index'
    import Collection from '../../models/Collection'
    export default {
        name: 'turns',
        data:()=> ({columns:['id','turno','estado','']}),
        components:{List,Actions,Empty},
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
                    this.$store.dispatch('turns/SET_TURNS', {turns:Collection.create(turns, Turn)})
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