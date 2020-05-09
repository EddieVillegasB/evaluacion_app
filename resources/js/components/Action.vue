<template>
   <button @click="saveOrUpdate" type="button" class="bg-green-800 p-2">
        {{action | method}}
    </button>
</template>

<script>
  export default {

    props:{
        item:{
            type: Object,
            require: true
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
        try {
            if(!this.item.isComplete()) return
            await axios.post(`/v1/${this.item.path}`, this.item)
            this.$router.push({name:this.item.path})
        } catch (error) {
            console.log(error)
        }
      },
      async update(){
        try {
          await axios.put(`/v1/${this.item.fullPath}`, this.item)
          this.$router.push({name:this.item.path})
        } catch (error) {
          console.log(error)
        }
      },
    },

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

  }
</script>

<style>

</style>