import movies from '../components/movies/index'
import movie from '../components/movies/store'
import turns from '../components/turns/index'
import turn from '../components/turns/create'

const routes = [
    { path: '/turns', component: turns, name:'turns'},
    { path: '/turns/:id', component: turn, name:'turn'},
    { path: '/movies', component: movies, name:'movies'},
    { path: '/movies/:id', component: movie, name:'movie'}
]

export default routes