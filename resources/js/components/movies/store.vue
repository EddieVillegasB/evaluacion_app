<template>
  
  <form>
      <div class="w-full m-2">
        <label>{{'Nombres'}}</label>
        <input class="w-3/4" v-model="movie.name"/>
      </div>

      <div class="w-full m-2">
        <label>{{'F. publicacion'}}</label>
        <input class="w-3/4" type="date" v-model="movie.published_at"/>
      </div>

      <div class="w-full m-2">
        <label>{{'imagen'}}</label>
        <input type="file" class='w-3/4'/>
      </div>

      <button @click="saveOrUpdate" type="button" class="bg-green-800 p-2">
          {{action | method}}
      </button>

  </form>

</template>

<script>

    import Movie from '../../models/movie'

    export default {
        
        name:'movies.create',

        data : () =>({movie:{}}),

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
                const URL = '/v1/movies'
                try {
                    await axios.post(URL, this.movie)
                    this.$router.push({name:'movies.index'})
                } catch (error) {
                    console.log(error)
                }
            },
            async update(){
                const URL = `/v1/movies/${this.movie.id}`
                try {
                    await axios.put(URL, this.movie)
                    this.$router.push({name:'movies.index'})
                } catch (error) {
                    console.log(error)
                }
            },
            async get(id){
                const URL = `/v1/movies/${id}`
                try {
                    const {data : {movie}} = await axios.get(URL)
                    return movie
                } catch (error) {
                    console.log(error)
                }
            }
        },

        async created(){
            const {params:{id}} = this.$route
            if(id){
                const movie = await this.get(id)
                this.movie = Movie.create(movie)
            }
        }

    }
</script>

<style>

</style>