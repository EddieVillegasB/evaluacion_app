import movies from '../components/movies/index'
import create from '../components/movies/store'
import turns from '../components/turns/index'

const routes = [
    { path: '/movies', component: movies, name:'movies.index'},
    { path: '/movies/create', component: create, name:'movies.store'},
    { path: '/turns', component: turns, name:'turns'}
]

export default routes