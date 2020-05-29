<template>
  <section class="border border-black">
    <List :columns="columns" v-if="movies_isEmpty" action='movies/ORDER_BY'>
      <tr v-for="(movie, index) in movies.data" :key="index">
        <td>{{movie.id}}</td>
        <td>{{movie.name}}</td>  
        <td>{{movie.published_at | format_date}}</td>  
        <td>{{movie.status | isActive}}</td>
        <td><Actions :item="movie" :action="'movies/DELETE_MOVIE'" :isAssing="true"/></td>
      </tr>
    </List>
    <Empty :message="'No hay peliculas'" v-else/>
  </section>
</template>

<script>
  import axios from 'axios'
  import List from '../AppList'
  import Empty from '../Empty'
  import moment from 'moment'
  import Actions from '../Actions'
  import Movie from '../../models/movie/index'
  import Collection from '../../models/Collection'
  
  export default {

    name:'movies',
    
    data: () => ({columns:['id', 'nombre', 'f. publicación', 'estado','']}),
    
    filters:{
      format_date : (value) => moment(value).format('MM-DD-YYYY')
    },
    
    components:{List, Actions, Empty},
    
    methods:{
      async getMovies(){
        try {
          const {data:{movies}} = await axios.get('/v1/movies')
          this.$store.dispatch('movies/SET_MOVIES', {movies:Collection.create(movies,Movie)})
        } catch (error) {
          console.log(error)
        }
      }
    },
    
    computed:{
      movies(){
        return this.$store.getters['movies/movies']
      },
      movies_isEmpty(){
        return this.$store.getters['movies/isEmpty']
      }
    },
    
    created(){
      this.getMovies()
    }

  }
</script>

<style>

</style>