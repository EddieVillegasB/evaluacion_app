<template>
  
  <form>
    <label>{{'Turno'}}</label>
    <input type="time" v-model="turn.time"/>
    <label>{{'Activo'}}</label>
    <input type="checkbox" v-model="turn.status"/>
    <Action :item="turn"/>
  </form>

</template>

<script>

    import Turn from '../../models/turn/index'

    import Action from '../../components/Action'

    export default {

        name:'turn',

        components:{
            Action
        },

        data:() => ({turn:{}}),

        methods:{
            async get(id){
                try {
                    const {data} = await axios.get(`/v1/turns/${id}`)
                    return data
                } catch (error) {
                    console.log(error)
                }
            }
        },

        async created(){
            const {params:{id}} = this.$route
            if(id){
                const {turn} = await this.get(id)
                this.turn = Turn.create(turn)
            }else {
                this.turn = Turn.create()
            }
        }
    }
</script>