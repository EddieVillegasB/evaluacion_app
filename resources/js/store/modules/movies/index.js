const store = {
    namespaced: true,
    state:{
        movies:[],
        movie:{}
    },
    actions:{
        SET_MOVIES({commit}, payload){
            commit('SET_MOVIES', payload)
        },
        DELETE_MOVIE({commit, state}, payload){
            const movies = state.movies.filter(movie => movie.id !== payload.id)
            commit('SET_MOVIES', {movies})
        }
    },
    mutations:{
        SET_MOVIES(state, payload){
            state.movies = payload.movies
        }
    },
    getters:{
        movies : (state) => state.movies 
    }
}

export default store