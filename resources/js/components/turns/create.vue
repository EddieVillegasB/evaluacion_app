<template>
  
  <form>
    <label>{{'Turno'}}</label>
    <input type="time" v-model="turn.time"/>
    <label>{{'Activo'}}</label>
    <input type="checkbox" v-model="turn.status"/>
    <button type="button" @click="save">{{'Guardar'}}</button>
  </form>

</template>

<script>
    import Turn from '../../models/Turn'
    export default {
        name:'turns.store',
        data:() => ({turn:{}}),
        methods:{
            async save(){
                const URL = '/v1/turns'
                try{
                    await axios.post(URL, this.turn)
                    this.$router.push({name:'turns.index'})
                } catch(e){
                    console.log(e)
                }
            }
        },
        created(){
            this.turn = Turn.create()
        }
    }
</script>