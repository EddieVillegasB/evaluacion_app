<template>
    <section class="border border-black">
        <List :columns="columns">
            <tr v-for="(item,index) in turns" :key="index">
                <td>{{item.id}}</td>
                <td>{{item.time}}</td>
                <td>{{item.status | isActive}}</td>
                <td><Actions :item="item"/></td>
            </tr>
        </List>
    </section>
</template>

<script>
    import List from '../List'
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
                    this.turns = turns
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