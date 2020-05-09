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

      <Action :item="movie"/>

  </form>

</template>

<script>

  import Movie from '../../models/movie/index'
  import Action from '../../components/Action'

  export default {
      
    //name:'movie',

    data : () =>({movie:{}}),

    components:{
      Action
    },

    methods:{
      async get(id){
        try {
            const {data} = await axios.get(`/v1/movies/${id}`)
            return data
        } catch (error) {
            console.log(error)
        }
      }
    },

    async created(){
      const {params:{id}} = this.$route
      try {
          if(id){
              const {movie = {}} = await this.get(id)
              this.movie = Movie.create(movie)
          }else {
              this.movie = Movie.create()
          }
      } catch (error) {
          console.log(error)
      }
    }

  }
</script>

<style>

</style>