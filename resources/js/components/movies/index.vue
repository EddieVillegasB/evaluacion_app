<template>
  <section class="border border-black">
    <List :columns="columns">
      <tr v-for="(movie, index) in movies" :key="index">
      <td>{{movie.id}}</td>  
      <td>{{movie.name}}</td>  
      <td>{{movie.published_at | format_date}}</td>  
      <td>{{movie.status | isActive}}</td>
      <td><Actions :item="movie"/></td>
      </tr>
    </List>
  </section>
</template>

<script>
  import axios from 'axios'
  import List from '../List'
  import moment from 'moment'
  import Actions from '../Actions'
  import Movie from '../../models/movie'
  export default {
      name:'movies',
      data: () => ({
          movies:[],
          columns:['id', 'nombre', 'F. Publicacion', 'Estado','']
      }),
      filters:{
        format_date(value){
          return moment(value).format('MM-DD-YYYY')
        }
      },
      components:{
        List,
        Actions
      },
      methods:{
        async getMovies(){
          const URL = '/v1/movies'
          try {
              const {data:{movies}} = await axios.get(URL)
              this.movies = movies.map(Movie.create)
              this.$store.dispatch('movies/SET_MOVIES', {movies:this.movies})
          } catch (error) {
              console.log(error)
          }
        }
      },
      created(){
        this.getMovies()
    }
  }
</script>

<style>

</style>