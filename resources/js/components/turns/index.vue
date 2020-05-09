<template>
    <section class="border border-black">
        <List :columns="columns">
            <tr v-for="(turn,index) in turns" :key="index">
                <td>{{turn.id}}</td>
                <td>{{turn.time}}</td>
                <td>{{turn.status | isActive}}</td>
                <td><Actions :item="turn"/></td>
            </tr>
        </List>
    </section>
</template>

<script>
    import List from '../List'
    import Turn from '../../models/Turn'
    import Actions from '../Actions'
    export default {
        name: 'turns.index',
        data:()=> ({columns:['id','turno','estado',''], turns:[]}),
        components:{
            List,
            Actions
        },
        methods:{
            async getTurns(){
                const URL = '/v1/turns'
                try {
                    const {data:{turns}} = await axios.get(URL)
                    this.turns = turns.map(Turn.create)
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