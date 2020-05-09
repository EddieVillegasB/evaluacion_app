<template>
  
    <form class="flex flex-wrap">

      <div class="flex w-full mb-8">
        <div class="w-2/12">
          <label>{{'Nombres'}}</label>
        </div>
        <div class="w-10/12">
          <input class="w-full" v-model="movie.name"/>
        </div>
      </div>

      <div class="w-full mb-8">
        <label>{{'F. publicacion'}}</label>
        <input class="w-3/4" type="date" v-model="movie.published_at"/>
      </div>

      <div class="w-full mb-8">
        <label>{{'imagen'}}</label>
        <a href="#" @click="load_image">
          <img :src="movie.image" class="w-32"/>
        </a>
        <input type="file" class='w-3/4 hidden' @click="setImage" ref="imagen"/>
      </div>


      <Action :item="movie"/>

  </form>

</template>

<script>

  import Movie from '../../models/movie/index'
  import Action from '../../components/Action'

  export default {
      
    name:'movie',

    data : () =>({movie:{}}),

    components:{
      Action
    },

    methods:{
      load_image(){
        this.$refs.imagen.click()
      },
      setImage(e){
        const [image] = e.target.files
        this.movie.image = image
      },
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