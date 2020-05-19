<template>
  
  <form class="w-full max-w-sm">
    
    <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/3">
            <label class="block font-bold md:text-right mb-1 md:mb-0 pr-4" for="time">
                {{'Turno'}}
            </label>
        </div>
        <div class="md:w-2/3">
            <input
                id="time"
                type="time" 
                v-model="turn.time" 
                class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            />
        </div>
    </div>
    
    <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/3">
            <span class="block font-bold md:text-right mb-1 md:mb-0 pr-4">{{'Activo?'}}</span>
        </div>
        <label class="md:w-2/3 block font-bold">
            <input type="checkbox" v-model="turn.status" class="mr-2 leading-tight"/>
        </label>
        
    </div>
    
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