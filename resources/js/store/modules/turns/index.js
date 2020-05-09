const store = {
    namespaced: true,
    state:{
        turns:[],
        turn:{}
    },
    actions:{
        SET_TURNS({commit}, payload){
            commit('SET_TURNS', payload)
        },
        DELETE_TURN({commit, state}, payload){
            const turns = state.turns.filter(({id}) => id !== payload.id)
            commit('SET_TURNS', {turns})
        }
    },
    mutations:{
        SET_TURNS(state, payload){
            state.turns = payload.turns
        }
    },
    getters:{
        turns : (state) => state.turns 
    }
}

export default store