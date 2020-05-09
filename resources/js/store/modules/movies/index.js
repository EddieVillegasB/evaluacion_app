const store = {
    namespaced: true,
    state:{
        movies:[],
        movie:{}
    },
    actions:{
        SET_MOVIES({commit}, payload){
            commit('SET_MOVIES', payload)
        }
    },
    mutations:{
        SET_MOVIES(state, payload){
            state.movies = payload.movies
        }
    },
    getters:{

    }
}

export default store