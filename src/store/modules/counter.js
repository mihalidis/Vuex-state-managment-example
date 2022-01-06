const state = {
    counter: 0
}

const getters = {
    doubleCounter(state) {
        return state.counter * 2;
    },
    tripleCounter(state) {
        return state.counter * 3;
    },
    counter(state) {
        return state.counter;
    }
}

const mutations = {
    increaseCounter(state) {
        state.counter++;
    },
    decreaseCounter(state) {
        state.counter--;
    }
}

const actions = {
    incAsync({commit}, payload) {
        // use setTimeout for simulating async request
        setTimeout(() => {
            commit("increaseCounter");
        }, payload.time);
    },
    decAsync({commit}, payload) {
        setTimeout(() => {
            commit("decreaseCounter");
        }, payload.time);
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}