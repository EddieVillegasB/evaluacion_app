import movies from '../components/movies/index'
import movie from '../components/movies/store'
import turns from '../components/turns/index'
import turn from '../components/turns/create'

const routes = [
    { path: '/turns', component: turns, name:'turns.index'},
    { path: '/turns/:id', component: turn, name:'turns.show'},
    { path: '/movies', component: movies, name:'movies.index'},
    { path: '/movies/:id', component: movie, name:'movies.show'}
]

export default routes