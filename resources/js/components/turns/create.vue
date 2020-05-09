<template>
  
  <form>
    <label>{{'Turno'}}</label>
    <input type="time" v-model="turn.time"/>
    <label>{{'Activo'}}</label>
    <input type="checkbox" v-model="turn.status"/>
     <button @click="saveOrUpdate" type="button" class="bg-green-800 p-2">
          {{action | method}}
      </button>
  </form>

</template>

<script>
    import Turn from '../../models/Turn'
    export default {
        name:'turns.store',
        data:() => ({turn:{}}),
        computed:{
            action(){
                return this.$route.params.id ? true : false
            }
        },
         filters:{
            method(value){
                return value ? 'Actualizar' : 'Guardar'
            }
        },
        methods:{
            saveOrUpdate(){
                if(this.action)
                    this.update()
                else
                    this.save() 
            },
            async save(){
                const URL = '/v1/turns'
                try{
                    await axios.post(URL, this.turn)
                    this.$router.push({name:'turns.index'})
                } catch(e){
                    console.log(e)
                }
            },
            async update(){
                const URL = `/v1/turns/${this.turn.id}`
                try{
                    await axios.put(URL, this.turn)
                    this.$router.push({name:'turns.index'})
                } catch(e){
                    console.log(e)
                }
            },
            async get(id){
                const URL = `/v1/turns/${id}`
                try {
                    const {data : {turn}} = await axios.get(URL)
                    return turn
                } catch (error) {
                    console.log(error)
                }
            }
        },
        async created(){
            const {params:{id}} = this.$route
            if(id){
                const turn = await this.get(id)
                this.turn = Turn.create(turn)
            }
        }
    }
</script>