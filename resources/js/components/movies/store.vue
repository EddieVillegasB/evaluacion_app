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

      <button @click="save" type="button" class="bg-green-800 p-2">
          {{'guardar'}}
      </button>

  </form>

</template>

<script>

    import Movie from '../../models/movie'

    export default {
        
        name:'movies.create',

        data : () =>({movie:{}}),

        methods:{
            async save(){
                const URL = '/v1/movies'
                try {
                    await axios.post(URL, this.movie)
                    this.$router.push({name:'movies.index'})
                } catch (error) {
                    console.log(error)
                }
            }
        },

        created(){
            this.movie = Movie.create()
        }

    }
</script>

<style>

</style>