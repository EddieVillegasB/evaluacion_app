<template>
   <button
    @click="saveOrUpdate" 
    type="button" 
    class="bg-teal-500 inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-black mt-4 lg:mt-0">
        {{action | method}}
    </button>
</template>

<script>
  export default {
    props:{
        item:{
            type: Object,
            require: false
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
        if(!this.item.isComplete()) return
        const formData = new FormData()
        for(let property in this.item)
          formData.append(property, this.item[property])
        try {
            await axios.post(`/v1/${this.item.path}`, formData)
            this.$router.push({name:this.item.path})
        } catch (error) {
            console.log(error)
        }
      },
      update(){
        const url = `/v1/${this.item.fullPath}`
        try {
          axios.put(url, {...this.item})
        } catch (error) {
          console.log(error)
        }
        this.$router.push({name:this.item.path})
      }
    },
    computed:{
      action(){
        return (this.$route.params.id || this.$route.query.movie) ? true : false
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