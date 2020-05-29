const store = {
    namespaced: true,
    state:{
        movies:{},
        movie:{}
    },
    actions:{
        SET_MOVIES({commit}, payload){
            commit('SET_MOVIES', payload)
        },
        DELETE_MOVIE({commit, state}, payload){
            const movies = state.movies.data.filter(movie => movie.id !== payload.id)
            commit('SET_DATA_MOVIES', movies)
        }
    },
    mutations:{
        SET_MOVIES(state, payload){
            state.movies = payload.movies
        },
        SET_DATA_MOVIES(state, data){
            state.movies.data = data
        }
    },
    getters:{
        movies : (state) => state.movies,
        isEmpty : (state, getter) => !!getter.movies.data.length,
        findById : (state, getters) => id => getters.movies.data.find(movie => movie.id === id),
    }
}

export default store