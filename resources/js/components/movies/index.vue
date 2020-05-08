<template>
  <section class="border border-black mt-8">
    <List :columns="columns">
      <tr v-for="(movie, index) in movies" :key="index">
      <td>{{movie.id}}</td>  
      <td>{{movie.name}}</td>  
      <td>{{movie.published_at}}</td>  
      <td>{{movie.status}}</td>
      </tr>
    </List>
  </section>
</template>

<script>
  import List from '../List'
  import axios from 'axios'
  export default {
      data: () => ({
          movies:[],
          columns:['id', 'nombre', 'F. Publicacion', 'Estado']
      }),
      components:{
        List
      },
      methods:{
        async getMovies(){
          const URL = '/v1/movies/'
          try {
              const {data:{movies}} = await axios.get(URL)
              this.movies = movies
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