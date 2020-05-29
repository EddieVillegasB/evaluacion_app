<template>
  
    <form class="w-full max-w-sm">
      
        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3">
            <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
              {{'Nombre'}}
            </label>
          </div>
          <div class="md:w-2/3">
            <input 
              type="text"  
              v-model="movie.name"
              class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
            />
          </div>
        </div>

        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3">
            <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
              {{'F. publicacion'}}
            </label>
          </div>
          <div class="md:w-2/3">
            <input 
              type="date" 
              v-model="movie.published_at"
              class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
            />
          </div>
        </div>

        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3">
            <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
              {{'imagen'}}
            </label>
          </div>
          <div class="md:w-2/3">
            <a href="!#" @click="load_image">
              <div class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500">
                <img :src="image"  alt="click here"/>
              </div>
            </a>
            <input type="file" class='w-3/4 hidden' @click="setImage" ref="imagen"/>
          </div>
        </div>

      <Action :item="movie"/>

  </form>

</template>

<script>

  import Movie from '../../models/movie/index'
  import Action from '../../components/Action'

  export default {
      
    name:'movie',

    data : () =>({movie:{},image:'', errors:{nombre:[], fecha:[],imagen:[]}}),

    components:{
      Action
    },

    methods:{
      load_image(e){
        e.preventDefault()
        this.$refs.imagen.click()
      },
      setImage(e){
        const [image] = e.target.files
        
        this.movie.image = image
  
        const reader = new FileReader();
        
        reader.readAsDataURL(image);
        
        reader.onloadend = () => this.image = reader.result
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
              this.image = this.movie.image
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